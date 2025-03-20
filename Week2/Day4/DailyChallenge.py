import psycopg2
import requests
import random

conn = psycopg2.connect("dbname=countries user=postgres password=Dark1921")
cur = conn.cursor()

def fetch_random_countries():
    url = "https://restcountries.com/v3.1/all"
    response = requests.get(url)
    if response.status_code != 200:
        print("Error fetching data")
        return []
    all_countries = response.json()
    random_countries = random.sample(all_countries, 10)
    country_data = []
    for country in random_countries:
        country_data.append((
            country.get("name", {}).get("common", "Unknown"),
            country.get("capital", ["Unknown"])[0],
            country.get("flags", {}).get("png", ""),
            country.get("subregion", "Unknown"),
            country.get("population", 0),
        ))

    return country_data

def save_toDB(countries):
    cur.execute("CREATE TABLE IF NOT EXISTS countries (id SERIAL PRIMARY KEY, name VARCHAR(255), capital VARCHAR(255), flag VARCHAR(255), subregion VARCHAR(255), population BIGINT)")
    query = "INSERT INTO countries (name, capital, flag, subregion, population) VALUES (%s, %s, %s, %s, %s)"
    cur.executemany(query, countries)
    conn.commit()
    print("Data saved to DB")

if __name__ == "__main__":
    countries = fetch_random_countries()
    if countries:
        save_toDB(countries)

