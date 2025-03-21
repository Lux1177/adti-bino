type Building = {
	name: string
	director: Person
	head_teacher: Person
	location: string
}

type Person = {
	name: string
	role: string
	phone: string
}

export const BUILDINGS: Building[] = [
	{
		name: "Офтальмология кафедраси",
		director: {
			name: "Икромов А.Ф.",
			role: "Мудир",
			phone: "90-269-01-00"
		},
		head_teacher: {
			name: "Умарова Б.",
			role: "Завуч",
			phone: "91-477-30-65"
		},
		location: "Vizion optima, Lens optima (темир йўл вокзали) 8-OP,5-OP, VBKTTM (furqat)"
	},

	{
		name: "Анатомия ва клиник анатомия кафедраси",
		director: {
			name: "Кахаров З.",
			role: "Мудир",
			phone: "93-524-96-19"
		},
		head_teacher: {
			name: "Тулянова Д.",
			role: "Завуч",
			phone: "94-568-11-58"
		},
		location: "АДТИ 1-ўқув биноси"
	},

]