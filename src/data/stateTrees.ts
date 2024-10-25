export interface StateTree {
    id: string,
    state: string,
    commonName: string,
    binomialName: string,
    imgSrc: string | null,
    imgAlt: string | null
}

export const stateTrees: StateTree[] = [
    {
        "id": "INAP",
        "state": "Andhra Pradesh",
        "commonName": "Neem",
        "binomialName": "Azadirachta indica",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/2/20/Neem_%28Azadirachta_indica%29_in_Hyderabad_W_IMG_6976.jpg/150px-Neem_%28Azadirachta_indica%29_in_Hyderabad_W_IMG_6976.jpg",
        "imgAlt": "Neem (Azadirachta indica) in Hyderabad W IMG 6976.jpg"
    },
    {
        "id": "INAR",
        "state": "Arunachal Pradesh",
        "commonName": "Hollong",
        "binomialName": "Dipterocarpus macrocarpus",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/1/19/Sapling_of_Hollong_tree_%28Dipterocarpus_macrocarpus%29%2C_the_state_tree_of_Assam.jpg/150px-Sapling_of_Hollong_tree_%28Dipterocarpus_macrocarpus%29%2C_the_state_tree_of_Assam.jpg",
        "imgAlt": "Sapling of Hollong tree (Dipterocarpus macrocarpus), the state tree of Assam.jpg"
    },
    {
        "id": "INAS",
        "state": "Assam",
        "commonName": "Hollong",
        "binomialName": "Dipterocarpus macrocarpus",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/1/19/Sapling_of_Hollong_tree_%28Dipterocarpus_macrocarpus%29%2C_the_state_tree_of_Assam.jpg/150px-Sapling_of_Hollong_tree_%28Dipterocarpus_macrocarpus%29%2C_the_state_tree_of_Assam.jpg",
        "imgAlt": "Sapling of Hollong tree (Dipterocarpus macrocarpus), the state tree of Assam.jpg"
    },
    {
        "id": "INBR",
        "state": "Bihar",
        "commonName": "Sacred fig (Peepal)",
        "binomialName": "Ficus religiosa",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ficus_religiosa_Bo.jpg/150px-Ficus_religiosa_Bo.jpg",
        "imgAlt": "Ficus religiosa Bo.jpg"
    },
    {
        "id": "INCT",
        "state": "Chhattisgarh",
        "commonName": "Sal",
        "binomialName": "Shorea robusta",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Sal_%28Shorea_robusta%29-_old_leaf_at_Jayanti%2C_Duars_W_Picture_122.jpg/150px-Sal_%28Shorea_robusta%29-_old_leaf_at_Jayanti%2C_Duars_W_Picture_122.jpg",
        "imgAlt": "Sal (Shorea robusta)- old leaf at Jayanti, Duars W Picture 122.jpg"
    },
    {
        "id": "INGA",
        "state": "Goa",
        "commonName": "Coconut",
        "binomialName": "Cocos nucifera",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/7/79/Starr_031209-0059_Cocos_nucifera.jpg/150px-Starr_031209-0059_Cocos_nucifera.jpg",
        "imgAlt": "Starr 031209-0059 Cocos nucifera.jpg"
    },
    {
        "id": "INGJ",
        "state": "Gujarat",
        "commonName": "Banyan",
        "binomialName": "Ficus benghalensis",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ficus-Benghalensis-Coral-Gables.JPG/150px-Ficus-Benghalensis-Coral-Gables.JPG",
        "imgAlt": "Ficus-Benghalensis-Coral-Gables.JPG"
    },
    {
        "id": "INHR",
        "state": "Haryana",
        "commonName": "Sacred fig",
        "binomialName": "Ficus religiosa",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ficus_religiosa_Bo.jpg/150px-Ficus_religiosa_Bo.jpg",
        "imgAlt": "Ficus religiosa Bo.jpg"
    },
    {
        "id": "INHP",
        "state": "Himachal Pradesh",
        "commonName": "Deodar",
        "binomialName": "Cedrus deodara",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/5/54/Cedrus_deodara_Himalajazeder.JPG/150px-Cedrus_deodara_Himalajazeder.JPG",
        "imgAlt": "Cedrus deodara Himalajazeder.JPG"
    },
    {
        "id": "INJH",
        "state": "Jharkhand",
        "commonName": "Sal",
        "binomialName": "Shorea robusta",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Sal_%28Shorea_robusta%29-_old_leaf_at_Jayanti%2C_Duars_W_Picture_122.jpg/150px-Sal_%28Shorea_robusta%29-_old_leaf_at_Jayanti%2C_Duars_W_Picture_122.jpg",
        "imgAlt": "Sal (Shorea robusta)- old leaf at Jayanti, Duars W Picture 122.jpg"
    },
    {
        "id": "INKA",
        "state": "Karnataka",
        "commonName": "Sandalwood",
        "binomialName": "Santalum album",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Sandal_leaf.jpg/150px-Sandal_leaf.jpg",
        "imgAlt": "Sandal leaf.jpg"
    },
    {
        "id": "INKL",
        "state": "Kerala",
        "commonName": "Coconut",
        "binomialName": "Cocos nucifera",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/7/79/Starr_031209-0059_Cocos_nucifera.jpg/150px-Starr_031209-0059_Cocos_nucifera.jpg",
        "imgAlt": "Starr 031209-0059 Cocos nucifera.jpg"
    },
    {
        "id": "INMP",
        "state": "Madhya Pradesh",
        "commonName": "Banyan",
        "binomialName": "Ficus benghalensis",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ficus-Benghalensis-Coral-Gables.JPG/150px-Ficus-Benghalensis-Coral-Gables.JPG",
        "imgAlt": "Ficus-Benghalensis-Coral-Gables.JPG"
    },
    {
        "id": "INMH",
        "state": "Maharashtra",
        "commonName": "Mango",
        "binomialName": "Mangifera indica",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/4/44/Mangifera_indica._Tropical_Brazil.JPG/150px-Mangifera_indica._Tropical_Brazil.JPG",
        "imgAlt": "Mangifera indica. Tropical Brazil.JPG"
    },
    {
        "id": "INMN",
        "state": "Manipur",
        "commonName": "Uningthou",
        "binomialName": "Phoebe hainesiana",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Phoebe_hainesiana_north_Bengal_AJTJ.JPG/150px-Phoebe_hainesiana_north_Bengal_AJTJ.JPG",
        "imgAlt": "Phoebe hainesiana north Bengal AJTJ.JPG"
    },
    {
        "id": "INML",
        "state": "Meghalaya",
        "commonName": "White teak",
        "binomialName": "Gmelina arborea",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/7/76/Gmelina_arborea_bark_I_IMG_3543.jpg/150px-Gmelina_arborea_bark_I_IMG_3543.jpg",
        "imgAlt": "Gmelina arborea bark I IMG 3543.jpg"
    },
    {
        "id": "INMZ",
        "state": "Mizoram",
        "commonName": "Iron wood",
        "binomialName": "Mesua ferrea",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/c/c2/MesuaFerrea_IronWood.jpg/150px-MesuaFerrea_IronWood.jpg",
        "imgAlt": "MesuaFerrea IronWood.jpg"
    },
    {
        "id": "INNL",
        "state": "Nagaland",
        "commonName": "Alder",
        "binomialName": "Alnus nepalensis",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Alnus_incana_rugosa_leaves.jpg/150px-Alnus_incana_rugosa_leaves.jpg",
        "imgAlt": "Alnus incana rugosa leaves.jpg"
    },
    {
        "id": "INOR",
        "state": "Odisha",
        "commonName": "Sacred fig (Ashwattha)",
        "binomialName": "Ficus religiosa",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ficus_religiosa_Bo.jpg/150px-Ficus_religiosa_Bo.jpg",
        "imgAlt": "Ficus religiosa Bo.jpg"
    },
    {
        "id": "INPB",
        "state": "Punjab",
        "commonName": "Indian rosewood",
        "binomialName": "Dalbergia sissoo",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Dalbergia_sissoo.jpg/150px-Dalbergia_sissoo.jpg",
        "imgAlt": "Dalbergia sissoo.jpg"
    },
    {
        "id": "INRJ",
        "state": "Rajasthan",
        "commonName": "Khejri",
        "binomialName": "Prosopis cineraria",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jhand_%28Prosopis_cineraria%29_at_Hodal_W_IMG_1191.jpg/150px-Jhand_%28Prosopis_cineraria%29_at_Hodal_W_IMG_1191.jpg",
        "imgAlt": "Jhand (Prosopis cineraria) at Hodal W IMG 1191.jpg"
    },
    {
        "id": "INSK",
        "state": "Sikkim",
        "commonName": "Rhododendron",
        "binomialName": "Rhododendron niveum",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/7/74/Rhododendron_niveum_-_University_of_Copenhagen_Botanical_Garden_-_DSC07606.JPG/150px-Rhododendron_niveum_-_University_of_Copenhagen_Botanical_Garden_-_DSC07606.JPG",
        "imgAlt": "Rhododendron niveum - University of Copenhagen Botanical Garden - DSC07606.JPG"
    },
    {
        "id": "INTN",
        "state": "Tamil Nadu",
        "commonName": "Palmyra palm",
        "binomialName": "Borassus",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/0/01/Borassus_flabellifer.jpg/150px-Borassus_flabellifer.jpg",
        "imgAlt": "Borassus flabellifer.jpg"
    },
    {
        "id": "INTG",
        "state": "Telangana",
        "commonName": "Jammi",
        "binomialName": "Prosopis cineraria",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jhand_%28Prosopis_cineraria%29_at_Hodal_W_IMG_1191.jpg/150px-Jhand_%28Prosopis_cineraria%29_at_Hodal_W_IMG_1191.jpg",
        "imgAlt": "Jhand (Prosopis cineraria) at Hodal W IMG 1191.jpg"
    },
    {
        "id": "INTR",
        "state": "Tripura",
        "commonName": "Agar",
        "binomialName": "Aquillaria agallocha",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Agarwood.jpg/150px-Agarwood.jpg",
        "imgAlt": "Agarwood.jpg"
    },
    {
        "id": "INUP",
        "state": "Uttar Pradesh",
        "commonName": "Ashoka",
        "binomialName": "Saraca asoca",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Sita-Ashok_%28Saraca_asoca%29_leaves_%26_flowers_in_Kolkata_W_IMG_2272.jpg/150px-Sita-Ashok_%28Saraca_asoca%29_leaves_%26_flowers_in_Kolkata_W_IMG_2272.jpg",
        "imgAlt": "Sita-Ashok (Saraca asoca) leaves & flowers in Kolkata W IMG 2272.jpg"
    },
    {
        "id": "INUT",
        "state": "Uttarakhand",
        "commonName": "Burans",
        "binomialName": "Rhododendron arboreum",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Rhododendron_in_full_bloom%21_%288620051426%29.jpg/150px-Rhododendron_in_full_bloom%21_%288620051426%29.jpg",
        "imgAlt": "Rhododendron in full bloom! (8620051426).jpg"
    },
    {
        "id": "INWB",
        "state": "West Bengal",
        "commonName": "Alstonia , ছাতিম গাছ",
        "binomialName": "Alstonia scholaris",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/0/08/Alstonia_scholaris.jpg/150px-Alstonia_scholaris.jpg",
        "imgAlt": "Alstonia scholaris.jpg"
    },
    {
        "id": "INAN",
        "state": "Andaman and Nicobar Islands",
        "commonName": "Andaman redwood",
        "binomialName": "Pterocarpus dalbergioides",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/1/13/Andaman_padauk_02.JPG/150px-Andaman_padauk_02.JPG",
        "imgAlt": "Andaman padauk 02.JPG"
    },
    {
        "id": "INCH",
        "state": "Chandigarh",
        "commonName": "Mango Tree",
        "binomialName": "Mangifera Indica",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Starr_070221-4713_Mangifera_indica.jpg/150px-Starr_070221-4713_Mangifera_indica.jpg",
        "imgAlt": "Starr 070221-4713 Mangifera indica.jpg"
    },
    {
        "id": "INDH",
        "state": "Dadra and Nagar Haveli and Daman and Diu",
        "commonName": "Not yet designated",
        "binomialName": "",
        "imgSrc": null,
        "imgAlt": null
    },
    {
        "id": "INDL",
        "state": "Delhi",
        "commonName": "Flamboyant",
        "binomialName": "Delonix regia",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/8/87/Royal_Poinciana.jpg/150px-Royal_Poinciana.jpg",
        "imgAlt": "Royal Poinciana.jpg"
    },
    {
        "id": "INJK",
        "state": "Jammu and Kashmir",
        "commonName": "Chinar",
        "binomialName": "Platanus orientalis",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Platanus_orientalis_tree.JPG/149px-Platanus_orientalis_tree.JPG",
        "imgAlt": "Platanus orientalis tree.JPG"
    },
    {
        "id": "INLA",
        "state": "Ladakh",
        "commonName": "Not yet designated",
        "binomialName": "",
        "imgSrc": null,
        "imgAlt": null
    },
    {
        "id": "INLD",
        "state": "Lakshadweep",
        "commonName": "Bread fruit",
        "binomialName": "Artocarpus altilis",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/3/38/Uru-tahiti1.jpg/150px-Uru-tahiti1.jpg",
        "imgAlt": "Uru-tahiti1.jpg"
    },
    {
        "id": "INPY",
        "state": "Puducherry",
        "commonName": "Bael fruit tree",
        "binomialName": "Aegle marmelos",
        "imgSrc": "upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bael_%28Aegle_marmelos%29_tree_at_Narendrapur_W_IMG_4116.jpg/150px-Bael_%28Aegle_marmelos%29_tree_at_Narendrapur_W_IMG_4116.jpg",
        "imgAlt": "Bael (Aegle marmelos) tree at Narendrapur W IMG 4116.jpg"
    }
];
