function App() {
	const today = new Date();
	today.setMinutes(today.getMinutes() - today.getTimezoneOffset());

	const maxDate = today.toISOString().split("T")[0];

	const handleSubmit = (e: any) => {
		e.preventDefault();

		const PIN = () => {
			// do każdej litery przypisywać funkcję i stworzyć cyfrę kontrolną, zrobić research czemu e.target.name działa
			const A = e.target.gender.value === "male" ? "M" : "F";
			const B = e.target.birthDate.value.slice(2).replaceAll("-", "");
			const C = randomHexByte();
			const D = "A";

			function randomHexByte() {
				const array = new Uint8Array(1);
				crypto.getRandomValues(array);
				return array[0].toString(16).padStart(2, "0");
			}

			return `${A}_${B}_${C}_${D}`;
		};

		console.log(PIN());
	};

	// dodać walidacje w imie i nazwiso żeby nie można było dawać znaków specjalinych i numerów

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
						onKeyDown={e => {
							if (e.key === " ") e.preventDefault();
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
						onKeyDown={e => {
							if (e.key === " ") e.preventDefault();
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
