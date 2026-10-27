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
}, {
  id: 4,
  name: "Charlie",
  species: "Dog",
  breed: "Lebrador Retriever",
  age: 4,
  adopted: true,
  intakeDate: new Date("2023-11-15"),
  adoptionDate: new Date("2024-02-01"),
  medicalRecord: {
    vaccinations: ["Myxomatosis"],
    weightKg: 2.1,
    microchipId: null,
  },
  photo: "thumper-mini-lop.jpg"
}, {
  id: 5,
  name: "Luna",
  species: "Cat",
  breed: "Maine Coon",
  age: 5,
  adopted: false,
  intakeDate: new Date("2024-03-10"),
  medicalRecord: {
    vaccinations: ["Rabies", "Feline Distemper"],
    weightKg: 6.8,
    microchipId: null,
  },
  photo: "luna-maine-coon.jpg"
}, {
  id: 7,
  name: "Clover",
  species: "Rabbit",
  breed: "Netherland Dwarf",
  age: 2,
  adopted: false,
  intakeDate: new Date("2024-08-02"),
  medicalRecord: {
    vaccinations: ["Myxomatosis"],
    weightKg: 1.5,
    microchipId: null,
  },
  photo: "clover-netherland-dwarf.jpg"
}, {
  id: 8,
  name: "Rocky",
  species: "Dog",
  breed: "German Shepherd",
  age: 6,
  adopted: true,
  intakeDate: new Date("2023-12-12"),
  adoptionDate: new Date("2024-02-01"),
  medicalRecord: {
    vaccinations: ["Rabies", "Distemper", "Parvovirus"],
    weightKg: 34.2,
    microchipId: "GER321",
  },
  photo: "rocky-german-shepherd.jpg"
}, {
  id: 9,
  name: "Willow",
  species: "Cat",
  breed: "Bengal",
  age: 1,
  adopted: false,
  intakeDate: new Date("2024-03-10"),
  medicalRecord: {
    vaccinations: ["Rabies", "Feline Distemper"],
    weightKg: 6.8,
    microchipId: null,
  },
  photo: "willow-bengal.jpg"
}]