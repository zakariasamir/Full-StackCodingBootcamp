brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 2,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}


print(f"Zara's clients are: {', '.join(brand['type_of_clothes'])}")


brand["country_creation"] = "Spain"


if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")


del brand["creation_date"]


print(f"Last international competitor: {brand['international_competitors'][-1]}")


print(f"US major colors: {', '.join(brand['major_color']['US'])}")


print(f"Number of key-value pairs: {len(brand)}")


print(f"Dictionary keys: {', '.join(brand.keys())}")


more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}


brand.update(more_on_zara)


print(f"Number of stores: {brand['number_stores']}")