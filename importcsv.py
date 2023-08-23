import pyodbc as mssql
import csv
con = mssql.connect("DRIVER={SQL Server Native Client 11.0}; server=LAPTOP-4ASN5TKT; port=1433; database=sportchambara; trusted_connection=yes; TrustedServerCertificate=yes")
print("saatiinko yhteys")
cur = con.cursor()
#cur.execute("CREATE TABLE asiakkaat(id , nimi , maa)")

with open('kilpailijat.csv', encoding="utf8") as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=';')
    #all_values = []
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            print(row[1])
            line_count += 1
        else:
           #sqlstring = f"INSERT INTO asiakkaat values ({row[0]}, {row[1]}, {row[2]})"
           #print(sqlstring)
           cur.execute(f"INSERT INTO kilpailijat VALUES ('{row[0]}', '{row[1]}', '{row[2]}')") 
           con.commit()
print("Kilpailijat lisätty")           
vastaus = cur.execute("SELECT COUNT(*) FROM kilpailijat")
tulos = vastaus.fetchone()
print("Kilpailijoiden lukumäärä SQL-taulussa:", tulos[0])
con.close()
