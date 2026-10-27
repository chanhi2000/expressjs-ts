export type Pet = {
  id: number,
  name: string,
  species: string,
  breed: string,
  age: number
  adopted: boolean,
  intakeDate: Date,
  adoptionDate?: Date,
  medicalRecord: {
    vaccinations: string[],
    weightKg: number,
    microchipId: null | string,
  },
  photo: string,
}

export const pets: Pet[] = [{
  id: 1,
  name: "Bella",
  species: "Dog",
  breed: "Border Collie",
  age: 3,
  adopted: false,
  intakeDate: new Date("2024-06-15"),
  medicalRecord: {
    vaccinations: ["Rabies", "Distemper", "Parvovirus"],
    weightKg: 18.4,
    microchipId: null
  },
  photo: "bella-border-collie.jpg"
}, {
  id: 2,
  name: "Milo",
  species: "Cat",
  breed: "Siamese",
  age: 2,
  adopted: true,
  intakeDate: new Date("2024-01-01"),
  adoptionDate: new Date("2024-02-15"),
  medicalRecord: {
    vaccinations: ["Rabies"],
    weightKg: 5.2,
    microchipId: "ABC123",
  },
  photo: "milo-cat.jpg"
}, {
  id: 3,
  name: "Thumper",
  species: "Rabbit",
  breed: "Mini Lop",
  age: 1,
  adopted: false,
  intakeDate: new Date("2024-07-20"),
  medicalRecord: {
    vaccinations: ["Myxomatosis"],
    weightKg: 2.1,
    microchipId: null,
  },
  photo: "thumper-mini-lop.jpg"
}]