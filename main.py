import pandas as pd

df = pd.read_csv("data/raw/Resume.csv")

# Remove completely empty rows
df = df.dropna(how="all")

# Remove rows without resume text
df = df.dropna(subset=["Resume"])

# Remove duplicate resumes
df = df.drop_duplicates(subset=["Resume"])

# Normalize whitespace
df["Resume"] = (
    df["Resume"]
    .str.replace(r"\s+", " ", regex=True)
    .str.strip()
)

print(df.info())
print(df.head())