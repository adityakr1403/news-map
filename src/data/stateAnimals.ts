export interface StateAnimal {
    id: string,
    state: string;
    commonName: string;
    binomialName: string;
    iucnCategory: string;
    notes: string;
    imgSrc: string | null;
    imgAlt: string | null;
}

export const stateAnimals: StateAnimal[] = [
    {
        "id": "INAP",
        "state": "Andhra Pradesh",
        "commonName": "Blackbuck",
        "binomialName": "Antilope cervicapra",
        "iucnCategory": "NT",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Blackbuck_by_N_A_Nazeer.jpg/200px-Blackbuck_by_N_A_Nazeer.jpg",
        "imgAlt": "Blackbuck by N A Nazeer.jpg"
    },
    {
        "id": "INAR",
        "state": "Arunachal Pradesh",
        "commonName": "Gayal/Mithun",
        "binomialName": "Bos Frontalis",
        "iucnCategory": "EN",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/1/1e/B4_darjeling_para-5.jpg/200px-B4_darjeling_para-5.jpg",
        "imgAlt": "Mithun"
    },
    {
        "id": "INAS",
        "state": "Assam",
        "commonName": "One-horned rhinoceros",
        "binomialName": "Rhinoceros unicornis",
        "iucnCategory": "VU",
        "notes": "The state hosts majority (~2000) of Indian rhinos living in the Sub-continent (~2500)",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Indian_Rhino_%28Rhinoceros_unicornis%291_-_Relic38.jpg/200px-Indian_Rhino_%28Rhinoceros_unicornis%291_-_Relic38.jpg",
        "imgAlt": "Indian Rhino (Rhinoceros unicornis)1 - Relic38.jpg"
    },
    {
        "id": "INBR",
        "state": "Bihar",
        "commonName": "Gaur",
        "binomialName": "Bos gaurus",
        "iucnCategory": "VU",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Indian_Gaur_from_anaimalai_hills_JEG5290.jpg/200px-Indian_Gaur_from_anaimalai_hills_JEG5290.jpg",
        "imgAlt": "Indian Gaur from anaimalai hills JEG5290.jpg"
    },
    {
        "id": "INCT",
        "state": "Chhattisgarh",
        "commonName": "Wild water buffalo",
        "binomialName": "Bubalus bubalis arnee",
        "iucnCategory": "EN",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/5/51/Indian_Water_Buffalo_Bubalus_arnee_by_Dr_Raju_Kasambe_IMG_0347_%2811%29_%28cropped%29.jpg/200px-Indian_Water_Buffalo_Bubalus_arnee_by_Dr_Raju_Kasambe_IMG_0347_%2811%29_%28cropped%29.jpg",
        "imgAlt": "Indian Water Buffalo Bubalus arnee by Dr Raju Kasambe IMG 0347 (11) (cropped).jpg"
    },
    {
        "id": "INGA",
        "state": "Goa",
        "commonName": "Gaur",
        "binomialName": "Bos gaurus",
        "iucnCategory": "VU",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Indian_Gaur_from_anaimalai_hills_JEG5290.jpg/200px-Indian_Gaur_from_anaimalai_hills_JEG5290.jpg",
        "imgAlt": "Indian Gaur from anaimalai hills JEG5290.jpg"
    },
    {
        "id": "INGJ",
        "state": "Gujarat",
        "commonName": "Asiatic lion",
        "binomialName": "Panthera leo persica",
        "iucnCategory": "EN",
        "notes": "Lives exclusively in Gir Forest National Park the only place where asiatic lions live in the wild.",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/1/11/Panthera_leo_persica_male.jpg/200px-Panthera_leo_persica_male.jpg",
        "imgAlt": "Panthera leo persica male.jpg"
    },
    {
        "id": "INHR",
        "state": "Haryana",
        "commonName": "Blackbuck",
        "binomialName": "Antilope cervicapra",
        "iucnCategory": "NT",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Blackbuck_male_female.jpg/200px-Blackbuck_male_female.jpg",
        "imgAlt": "Blackbuck male female.jpg"
    },
    {
        "id": "INHP",
        "state": "Himachal Pradesh",
        "commonName": "Snow leopard",
        "binomialName": "Uncia uncia or Panthera uncia",
        "iucnCategory": "VU",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/1/19/Snow_leopard_portrait.jpg/200px-Snow_leopard_portrait.jpg",
        "imgAlt": "Snow leopard portrait.jpg"
    },
    {
        "id": "INJH",
        "state": "Jharkhand",
        "commonName": "Indian elephant",
        "binomialName": "Elephas maximus indicus",
        "iucnCategory": "EN",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/a/ac/IndianElephant.jpg/200px-IndianElephant.jpg",
        "imgAlt": "IndianElephant.jpg"
    },
    {
        "id": "INKA",
        "state": "Karnataka",
        "commonName": "Indian elephant",
        "binomialName": "Elephas maximus indicus",
        "iucnCategory": "EN",
        "notes": "Karnataka has the largest number of elephants in India",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/a/ac/IndianElephant.jpg/200px-IndianElephant.jpg",
        "imgAlt": "IndianElephant.jpg"
    },
    {
        "id": "INKL",
        "state": "Kerala",
        "commonName": "Indian elephant",
        "binomialName": "Elephas maximus indicus",
        "iucnCategory": "EN",
        "notes": "Elephants are an integral part of Kerala's culture. See Elephants in Kerala Culture",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/a/ac/IndianElephant.jpg/200px-IndianElephant.jpg",
        "imgAlt": "IndianElephant.jpg"
    },
    {
        "id": "INMP",
        "state": "Madhya Pradesh",
        "commonName": "Barasingha Swamp deer",
        "binomialName": "Rucervus duvaucelii",
        "iucnCategory": "VU",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Barasingha.jpg/200px-Barasingha.jpg",
        "imgAlt": "Barasingha.jpg"
    },
    {
        "id": "INMH",
        "state": "Maharashtra",
        "commonName": "Indian giant squirrel",
        "binomialName": "Ratufa indica",
        "iucnCategory": "LC",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Malabar_giant_sqirrel.jpg/200px-Malabar_giant_sqirrel.jpg",
        "imgAlt": "Malabar giant sqirrel.jpg"
    },
    {
        "id": "INMN",
        "state": "Manipur",
        "commonName": "Sangai",
        "binomialName": "Cervus eldi eldi",
        "iucnCategory": "EN",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/2/26/Cervus_eldii2.jpg/200px-Cervus_eldii2.jpg",
        "imgAlt": "Cervus eldii2.jpg"
    },
    {
        "id": "INML",
        "state": "Meghalaya",
        "commonName": "Clouded leopard",
        "binomialName": "Neofelis nebulosa",
        "iucnCategory": "VU",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/9/93/Clouded_leopard.jpg/200px-Clouded_leopard.jpg",
        "imgAlt": "Clouded leopard.jpg"
    },
    {
        "id": "INMZ",
        "state": "Mizoram",
        "commonName": "Himalayan serow",
        "binomialName": "Capricornis thar",
        "iucnCategory": "NT",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/1/18/Himalayan_Serow_Pangolakha_Wildlife_Sanctuary_East_Sikkim_Sikkim_India_13.02.2016.jpg/200px-Himalayan_Serow_Pangolakha_Wildlife_Sanctuary_East_Sikkim_Sikkim_India_13.02.2016.jpg",
        "imgAlt": "Himalayan Serow Pangolakha Wildlife Sanctuary East Sikkim Sikkim India 13.02.2016.jpg"
    },
    {
        "id": "INNL",
        "state": "Nagaland",
        "commonName": "Gayal/Mithun",
        "binomialName": "Bos frontalis",
        "iucnCategory": "VU",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/1/1e/B4_darjeling_para-5.jpg/200px-B4_darjeling_para-5.jpg",
        "imgAlt": "B4 darjeling para-5.jpg"
    },
    {
        "id": "INOR",
        "state": "Odisha",
        "commonName": "Sambar",
        "binomialName": "Rusa unicolor",
        "iucnCategory": "VU",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Sambhar_deer.jpg/200px-Sambhar_deer.jpg",
        "imgAlt": "Sambhar deer.jpg"
    },
    {
        "id": "INPB",
        "state": "Punjab",
        "commonName": "Blackbuck",
        "binomialName": "Antilope cervicapra",
        "iucnCategory": "NT",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Blackbuck_male_female.jpg/200px-Blackbuck_male_female.jpg",
        "imgAlt": "Blackbuck male female.jpg"
    },
    {
        "id": "INRJ",
        "state": "Rajasthan",
        "commonName": "Chinkara",
        "binomialName": "Gazella bennettii",
        "iucnCategory": "LC",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Chinkara_-_Shreeram_M_V_-_Bikaner.jpg/200px-Chinkara_-_Shreeram_M_V_-_Bikaner.jpg",
        "imgAlt": "Chinkara - Shreeram M V - Bikaner.jpg"
    },
    {
        "id": "INSK",
        "state": "Sikkim",
        "commonName": "Red panda",
        "binomialName": "Ailurus fulgens",
        "iucnCategory": "EN",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Ailurus_fulgens_RoterPanda_LesserPanda.jpg/200px-Ailurus_fulgens_RoterPanda_LesserPanda.jpg",
        "imgAlt": "Ailurus fulgens RoterPanda LesserPanda.jpg"
    },
    {
        "id": "INTN",
        "state": "Tamil Nadu",
        "commonName": "Nilgiri tahr",
        "binomialName": "Nilgiritragus hylocrius",
        "iucnCategory": "EN",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/4/45/Nilgiri_Tahr%2C_Kerala.jpg/200px-Nilgiri_Tahr%2C_Kerala.jpg",
        "imgAlt": "Nilgiri Tahr, Kerala.jpg"
    },
    {
        "id": "INTG",
        "state": "Telangana",
        "commonName": "Spotted deer (Chital)",
        "binomialName": "Axis axis",
        "iucnCategory": "LC",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/c/cb/White-tailed_deer_%28Odocoileus_virginianus%29_grazing_-_20050809.jpg/200px-White-tailed_deer_%28Odocoileus_virginianus%29_grazing_-_20050809.jpg",
        "imgAlt": "White-tailed deer (Odocoileus virginianus) grazing - 20050809.jpg"
    },
    {
        "id": "INTR",
        "state": "Tripura",
        "commonName": "Phayre's langur",
        "binomialName": "Trachypithecus phayrei",
        "iucnCategory": "EN",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Phayre%27s_Langur%2C_Trachypithecus_phayrei_in_Phu_Khieo_Wildlife_Sanctuary_%2821134240148%29.jpg/200px-Phayre%27s_Langur%2C_Trachypithecus_phayrei_in_Phu_Khieo_Wildlife_Sanctuary_%2821134240148%29.jpg",
        "imgAlt": "Phayre's Langur, Trachypithecus phayrei in Phu Khieo Wildlife Sanctuary (21134240148).jpg"
    },
    {
        "id": "INUP",
        "state": "Uttar Pradesh",
        "commonName": "Swamp deer",
        "binomialName": "Rucervus duvaucelii",
        "iucnCategory": "VU",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Barasingha.jpg/200px-Barasingha.jpg",
        "imgAlt": "Barasingha.jpg"
    },
    {
        "id": "INUT",
        "state": "Uttarakhand",
        "commonName": "Alpine musk deer",
        "binomialName": "Moschus chrysogaster",
        "iucnCategory": "EN",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Moschus_chrysogaster.jpg/200px-Moschus_chrysogaster.jpg",
        "imgAlt": "Moschus chrysogaster.jpg"
    },
    {
        "id": "INWB",
        "state": "West Bengal",
        "commonName": "Fishing Cat",
        "binomialName": "Prionailurus viverrinus",
        "iucnCategory": "VU",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/8/88/Fishing_Cat_%28Prionailurus_viverrinus%29_3.jpg/200px-Fishing_Cat_%28Prionailurus_viverrinus%29_3.jpg",
        "imgAlt": "Fishing Cat (Prionailurus viverrinus) 3.jpg"
    },
    {
        "id": "INAN",
        "state": "Andaman and Nicobar Islands",
        "commonName": "Dugong",
        "binomialName": "Dugong dugon",
        "iucnCategory": "VU",
        "notes": "strictly herbivore aquatic animal hence also known as Sea Cow",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/9/91/Dugong_Marsa_Alam.jpg/180px-Dugong_Marsa_Alam.jpg",
        "imgAlt": "Dugong Marsa Alam.jpg"
    },
    {
        "id": "INCH",
        "state": "Chandigarh",
        "commonName": "Indian Gray Mongoose",
        "binomialName": "Herpestes edwardsi",
        "iucnCategory": "LC",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Herpestes_edwardsii._2.jpg/180px-Herpestes_edwardsii._2.jpg",
        "imgAlt": "Common grey mangoose"
    },
    {
        "id": "INDH",
        "state": "Dadra and Nagar Haveli and Daman and Diu",
        "commonName": "Not yet designated",
        "binomialName": "",
        "iucnCategory": "",
        "notes": "",
        "imgSrc": null,
        "imgAlt": null
    },
    {
        "id": "INDL",
        "state": "Delhi",
        "commonName": "Nilgai",
        "binomialName": "Boselaphus tragocamelus",
        "iucnCategory": "LC",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/5/54/Nilgauantilope_Boselaphus_tragocamelus_Tierpark_Hellabrunn-10.jpg/180px-Nilgauantilope_Boselaphus_tragocamelus_Tierpark_Hellabrunn-10.jpg",
        "imgAlt": "Nilgauantilope Boselaphus tragocamelus Tierpark Hellabrunn-10.jpg"
    },
    {
        "id": "INJK",
        "state": "Jammu and Kashmir",
        "commonName": "Kashmir stag/Hangul",
        "binomialName": "Cervus elaphus hanglu",
        "iucnCategory": "CR",
        "notes": "Found in Kashmir Valley and Dachigam National Park",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Cervus_cashmeerianus_Smit.jpg/180px-Cervus_cashmeerianus_Smit.jpg",
        "imgAlt": "Cervus cashmeerianus Smit.jpg"
    },
    {
        "id": "INLA",
        "state": "Ladakh",
        "commonName": "Snow leopard",
        "binomialName": "Uncia uncia or Panthera uncia",
        "iucnCategory": "VU",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/1/19/Snow_leopard_portrait.jpg/200px-Snow_leopard_portrait.jpg",
        "imgAlt": "Snow leopard portrait.jpg"
    },
    {
        "id": "INLD",
        "state": "Lakshadweep",
        "commonName": "Butterfly fish",
        "binomialName": "Chaetodon decussatus",
        "iucnCategory": "NT",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/7/76/Bep_chaetodon_decussatus.jpg/180px-Bep_chaetodon_decussatus.jpg",
        "imgAlt": "Bep chaetodon decussatus.jpg"
    },
    {
        "id": "INPY",
        "state": "Puducherry",
        "commonName": "Indian palm squirrel",
        "binomialName": "Funambulus palmarum",
        "iucnCategory": "LC",
        "notes": "",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/3/36/Funambulus_palmarum_%28Bengaluru%29.jpg/180px-Funambulus_palmarum_%28Bengaluru%29.jpg",
        "imgAlt": "Funambulus palmarum (Bengaluru).jpg"
    }
];
