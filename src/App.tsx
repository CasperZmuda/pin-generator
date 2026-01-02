function App() {
	const today = new Date();
	today.setMinutes(today.getMinutes() - today.getTimezoneOffset());

	const maxDate = today.toISOString().split("T")[0];

	const handleSubmit = (e: any) => {
		e.preventDefault();

		const PIN = () => {
			const A = getGender();
			const B = getBirthDate();
			const C = getRandomNumber();
			const D = getCheckDigit();

			function getGender() {
				return e.target.gender.value === "male" ? "M" : "F";
			}

			function getBirthDate() {
				return e.target.birthDate.value.slice(2).replaceAll("-", "");
			}

			function getRandomNumber() {
				const array = new Uint16Array(1);
				crypto.getRandomValues(array);
				return (array[0] % 1000).toString().padStart(3, "0");
			}

			function getCheckDigit() {
				const checkDigit = Number(B + C)
					.toString()
					.split("")
					.map(Number)
					.reduce((acc, curr) => acc + curr, 0);
				return String(checkDigit % 10);
			}

			return `${A}_${B}_${C}_${D}`;
		};

		const ID_NUM = () => {
			return crypto.randomUUID();
		};

		console.log(`Wygenerowany ID: "${ID_NUM()}"`);
		console.log(`Wygenerowany PIN: "${PIN()}"`);
	};

	const handleValidation = (e: any) => {
		e.target.value = e.target.value.replace(/[^a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ]/g, "");
		e.target.value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase();
	};

	return (
		<>
			<form id="pin-form" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Imię i nazwisko noworodka:</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="np. Jan"
						minLength={2}
						onKeyUp={e => {
							handleValidation(e);
						}}
						required
					/>
					&nbsp;
					<input
						type="text"
						id="name"
						name="name"
						placeholder="np. Kowalski"
						minLength={2}
						onKeyUp={e => {
							handleValidation(e);
						}}
						required
					/>
				</div>

				<fieldset>
					<legend>Płeć noworodka:</legend>

					<label>
						<input type="radio" name="gender" value="male" required />
						Mężczyzna
					</label>

					<label>
						<input type="radio" name="gender" value="female" required />
						Kobieta
					</label>
				</fieldset>

				<div>
					<label htmlFor="birth-date">Data i godzina narodzin noworodka:</label>
					<input type="date" id="birth-date" name="birthDate" max={maxDate} required />
					&nbsp;
					<input type="time" id="birth-date" name="birthTime" required />
				</div>

				<button
					type="submit"
					onSubmit={e => {
						e.preventDefault();
					}}>
					Generuj PIN
				</button>
			</form>
		</>
	);
}

export default App;
