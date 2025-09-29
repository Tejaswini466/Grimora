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
    { sign: "Capricorn", start: [12, 22], end: [1, 19], characters: ["Secre Swallowtail", "Nozel Silva"] },
    { sign: "Aquarius", start: [1, 20], end: [2, 18], characters: ["Julius Novachrono", "Yuno"] }
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
      strengths: "Raw power, optimism, loyalty",
      weaknesses: "Recklessness, tunnel vision",
      tagline: "💥 No magic? No problem. I punch fate in the face.",
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