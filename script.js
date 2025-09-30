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
  { sign: "Capricorn", start: [12, 22], end: [1, 19], characters: ["Secre Swallowtail", "Nozel Silva", "Rill Boismortier"] },
  { sign: "Aquarius", start: [1, 20], end: [2, 18], characters: ["Julius Novachrono", "Grey", "Kiato"] },
  { sign: "Pisces", start: [2, 19], end: [3, 20], characters: ["Nacht Faust", "Dorothy Unsworth", "Sally"] },
  { sign: "Aries", start: [3, 21], end: [4, 19], characters: ["Asta", "Magna Swing", "Jack the Ripper"] },
  { sign: "Taurus", start: [4, 20], end: [5, 20], characters: ["Charmy Pappitson", "Sol Marron", "Gauche Adlai"] },
  { sign: "Gemini", start: [5, 21], end: [6, 20], characters: ["Gordon Agrippa", "Nebra Silva", "Rebecca Scarlet"] },
  { sign: "Cancer", start: [6, 21], end: [7, 22], characters: ["Mimosa Vermillion", "Klaus Lunettes", "Sister Lily"] },
  { sign: "Leo", start: [7, 23], end: [8, 22], characters: ["Mereoleona Vermillion", "Asta", "Leo Vermillion"] },
  { sign: "Virgo", start: [8, 23], end: [9, 22], characters: ["Charlotte Roselei", "William Vangeance", "Marx Francois"] },
  { sign: "Libra", start: [9, 23], end: [10, 22], characters: ["Fuegoleon Vermillion", "Finral Roulacase", "Yuno"] },
  { sign: "Scorpio", start: [10, 23], end: [11, 21], characters: ["Yami Sukehiro", "Henry Legolant", "Zora Ideale"] },
  { sign: "Sagittarius", start: [11, 22], end: [12, 21], characters: ["Luck Voltia", "Langris Vaude", "Rebecca Scarlet"] },
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
    },
    "Secre Swallowtail": {
      animal: "Bat",
      personality: "Quiet, clever, loyal",
      strengths: "Sealing magic, stealth, wisdom",
      weaknesses: "Isolation, secrecy",
      tagline: "🦇 I seal truths and guard legacies."
    }, 
    "Nozel Silva": {
      animal: "Peacock",
      personality: "Disciplined, proud, tactical",
      strengths: "Mercury magic, leadership, precision",
      weaknesses: "Arrogance, emotional restraint",
      tagline: "🪶 I strike with silver and silence."
    },
    "Rill Boismortier": {
      animal: "Chameleon",
      personality: "Creative, emotional, unpredictable",
      strengths: "Painting magic, imagination, spontaneity",
      weaknesses: "Immaturity, impulsiveness",
      tagline: "🎨 I paint chaos into beauty."
    },
    "Julius Novachrono": {
      animal: "Owl",
      personality: "Visionary, curious, playful",
      strengths: "Time magic, intellect, adaptability",
      weaknesses: "Overtrusting, secrecy",
      tagline: "⏳ Time bends for brilliance."
    },
    "Grey": {
      animal: "Mouse",
      personality: "Shy, transformative, empathetic",
      strengths: "Transformation magic, humility, supportiveness",
      weaknesses: "Low self-esteem, fear",
      tagline: "🐭 I change shapes, not hearts."
    },
    "Kiato": {
      animal: "Crane",
      personality: "Expressive, artistic, graceful",
      strengths: "Dance magic, agility, charm",
      weaknesses: "Overconfidence, distraction",
      tagline: "💃 I fight with rhythm and soul."
    },
    "Nacht Faust": {
      animal: "Raven",
      personality: "Mysterious, strategic, brooding",
      strengths: "Shadow magic, deception, planning",
      weaknesses: "Isolation, guilt",
      tagline: "🌑 I walk with demons so others don’t have to."
    },
    "Dorothy Unsworth": {
      animal: "Butterfly",
      personality: "Dreamy, imaginative, elusive",
      strengths: "Glamour magic, creativity, unpredictability",
      weaknesses: "Detachment, escapism",
      tagline: "🦋 I dream realities into existence."
    },
    "Sally": {
      animal: "Ferret",
      personality: "Experimental, intuitive, eccentric",
      strengths: "Gel magic, invention, curiosity",
      weaknesses: "Obsession, recklessness",
      tagline: "🧪 I test limits—and people."
    },
    "Asta": {
      animal: "Dragon",
      personality: "Bold, determined, rebellious",
      strengths: "Anti-magic, optimism, loyalty",
      weaknesses: "Recklessness, tunnel vision",
      tagline: "💥 No magic? No problem. I punch fate in the face."
    },
    "Magna Swing": {
      animal: "Boar",
      personality: "Fiery, loyal, reckless",
      strengths: "Explosive magic, grit, bravery",
      weaknesses: "Impulsiveness, pride",
      tagline: "🔥 I fight loud, live proud."
    },
    "Jack the Ripper": {
      animal: "Hyena",
      personality: "Chaotic, thrill-seeking, unpredictable",
      strengths: "Slash magic, adaptability, aggression",
      weaknesses: "Instability, lack of empathy",
      tagline: "🔪 I carve through limits—and logic."
    },
    "Charmy Pappitson": {
      animal: "Panda",
      personality: "Comfort-loving, nurturing, stubborn",
      strengths: "Food magic, dual nature, healing",
      weaknesses: "Laziness, distraction",
      tagline: "🍰 Feed the soul, fight the hunger."
    },
    "Sol Marron": {
      animal: "Badger",
      personality: "Earthy, protective, headstrong",
      strengths: "Earth magic, loyalty, strength",
      weaknesses: "Jealousy, impulsiveness",
      tagline: "🌱 I stand firm—and dig deep."
    },
    "Gauche Adlai": {
      animal: "Wolf",
      personality: "Possessive, grounded, loyal to family",
      strengths: "Mirror magic, focus, devotion",
      weaknesses: "Obsession, isolation",
      tagline: "🪞 I reflect only what matters—my sister."
    },
    "Gordon Agrippa": {
      animal: "Mole",
      personality: "Quiet, thoughtful, misunderstood",
      strengths: "Poison magic, empathy, loyalty",
      weaknesses: "Social anxiety, silence",
      tagline: "☠️ I speak softly—and carry toxins."
    },
    "Nebra Silva": {
      animal: "Scorpion",
      personality: "Dual-faced, expressive, volatile",
      strengths: "Mist magic, deception, flair",
      weaknesses: "Cruelty, arrogance",
      tagline: "🌫️ I vanish behind vanity."
    },
    "Rebecca Scarlet": {
      animal: "Rabbit",
      personality: "Optimistic, curious, emotionally open",
      strengths: "Charm, resilience, kindness",
      weaknesses: "Naivety, vulnerability",
      tagline: "💖 I blush through battles."
    },
    "Mimosa Vermillion": {
      animal: "Deer",
      personality: "Caring, intuitive, emotionally intelligent",
      strengths: "Plant magic, healing, empathy",
      weaknesses: "Hesitation, idealism",
      tagline: "🌿 Kindness is my strongest spell."
    },
    "Klaus Lunettes": {
      animal: "Stag",
      personality: "Protective, principled, loyal",
      strengths: "Steel magic, strategy, honor",
      weaknesses: "Rigidity, pride",
      tagline: "🛡️ I guard ideals with iron."
    },
    "Sister Lily": {
      animal: "Dove",
      personality: "Spiritual, nurturing, grounded",
      strengths: "Water magic, healing, wisdom",
      weaknesses: "Emotional restraint, denial",
      tagline: "🕊️ I bless paths I won’t walk."
    },
    "Leo Vermillion": {
      animal: "Tiger",
      personality: "Proud, fiery, growth-driven",
      strengths: "Flame magic, ambition, courage",
      weaknesses: "Impulsiveness, insecurity",
      tagline: "🔥 I burn to prove myself."
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