document.getElementById("grimoireForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const birthday = new Date(document.getElementById("birthday").value);
  const gender = document.getElementById("gender").value;

  const profile = getZodiacProfile(birthday, gender);
  displayCard(profile);
});

function getZodiacProfile(birthday, gender) {
  const month = birthday.getMonth() + 1;
  const day = birthday.getDate();

  const zodiacMap = [
  { sign: "Aries", start: [3, 21], end: [4, 19], characters: ["Asta", "Luck Voltia", "Zora Ideale"] },
  { sign: "Taurus", start: [4, 20], end: [5, 20], characters: ["Yami Sukehiro", "Charlotte Roselei", "Gauche Adlai"] },
  { sign: "Gemini", start: [5, 21], end: [6, 20], characters: ["Charmy Pappitson", "Henry Legolant", "Rades Spirito"] },
  { sign: "Cancer", start: [6, 21], end: [7, 22], characters: ["Noelle Silva", "Klaus Lunettes", "Nacht Faust"] },
  { sign: "Leo", start: [7, 23], end: [8, 22], characters: ["Mereoleona Vermillion", "Fuegoleon Vermillion", "Leopold Vermillion"] },
  { sign: "Virgo", start: [8, 23], end: [9, 22], characters: ["William Vangeance", "Finral Roulacase", "Grey"] },
  { sign: "Libra", start: [9, 23], end: [10, 22], characters: ["Rill Boismortier", "Mimosa Vermillion", "Sol Marron"] },
  { sign: "Scorpio", start: [10, 23], end: [11, 21], characters: ["Secre Swallowtail", "Sally", "Magna Swing"] },
  { sign: "Sagittarius", start: [11, 22], end: [12, 21], characters: ["Sekke Bronzazza", "Vanessa Enoteca", "Ladros"] },
  { sign: "Capricorn", start: [12, 22], end: [1, 19], characters: ["Nozel Silva", "Jack the Ripper", "Morgen Faust"] },
  { sign: "Aquarius", start: [1, 20], end: [2, 18], characters: ["Langris Vaude", "Dorothy Unsworth", "Patry"] },
  { sign: "Pisces", start: [2, 19], end: [3, 20], characters: ["Gordon Agrippa", "Rebecca Scarlet", "Kahono"] },
];
  
  function isBetween(month, day, start, end) {
    const startDate = new Date(2000, start[0] - 1, start[1]);
    const endDate = new Date(2000, end[0] - 1, end[1]);
    const current = new Date(2000, month - 1, day);
    if (start[0] > end[0]) {
      return current >= startDate || current <= endDate;
    }
    return current >= startDate && current <= endDate;
  }

  let matchedSign = zodiacMap.find(z =>
    isBetween(month, day, z.start, z.end)
  );

  const characterName = matchedSign ? matchedSign.characters[day % 2] : "Asta";
  
  const characterProfiles = {
    "Asta": {
      animal: "Dragon",
      personality: "Bold, determined, rebellious",
      strengths: "Anti-magic, optimism, loyalty",
      weaknesses: "Recklessness, tunnel vision",
      tagline: "💥 No magic? No problem. I punch fate in the face."
    },
    "Luck Voltia": {
      animal: "Cheetah",
      personality: "Adventurous, wild, thrill-seeking",
      strengths: "Lightning magic, speed, unpredictability",
      weaknesses: "Impulsiveness, lack of empathy",
      tagline: "⚡ Fight first, ask never."
    },
    "Zora Ideale": {
      animal: "Fox",
      personality: "Sarcastic, justice-driven, clever",
      strengths: "Trap magic, wit, rebellion",
      weaknesses: "Cynicism, trust issues",
      tagline: "🦊 I trap lies and expose truth."
    }

  };


  return {
    name: characterName,
    ...characterProfiles[characterName]
  };
}
function displayCard(profile) {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = `
    <div class="card-content">
      <h2 class="card-title">Your Grimoire</h2>
      <div class="section">
        <h3>🧝‍♂️ Black Clover Match</h3>
        <p><strong>${profile.name}</strong></p>
      </div>
      <div class="section">
        <h3>🐾 Spiritual Animal</h3>
        <p>${profile.animal}</p>
      </div>
      <div class="section">
        <h3>🧬 Personality</h3>
        <p>${profile.personality}</p>
      </div>
      <div class="section">
        <h3>💪 Strengths</h3>
        <p>${profile.strengths}</p>
      </div>
      <div class="section">
        <h3>⚡ Weaknesses</h3>
        <p>${profile.weaknesses}</p>
      </div>
      <div class="tagline">
        <em>${profile.tagline}</em>
      </div>
    </div>
  `;
}