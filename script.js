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
    },
    "Yami Sukehiro": {
      animal: "Panther",
      personality: "Intense, grounded, transformative",
      strengths: "Dark magic, strength, leadership",
      weaknesses: "Emotional walls, recklessness",
      tagline: "🖤 I slice through dimensions—and denial."
    },
    "Charlotte Roselei": {
      animal: "Swan",
      personality: "Elegant, reserved, perfectionist",
      strengths: "Briar magic, discipline, grace",
      weaknesses: "Emotional repression, pride",
      tagline: "🌹 I bloom with grace, thorns included."
    },
    "Gauche Adlai": {
      animal: "Wolf",
      personality: "Possessive, grounded, loyal to family",
      strengths: "Mirror magic, focus, devotion",
      weaknesses: "Obsession, isolation",
      tagline: "🪞 I reflect only what matters—my sister."
    },
    "Charmy Pappitson": {
      animal: "Panda",
      personality: "Whimsical, dual-natured, nurturing",
      strengths: "Food magic, healing, transformation",
      weaknesses: "Laziness, distraction",
      tagline: "🍰 Feed the soul, fight the hunger."
    },
    "Henry Legolant": {
      animal: "Sloth",
      personality: "Isolated, loyal, mysterious",
      strengths: "House magic, absorption, empathy",
      weaknesses: "Weak constitution, solitude",
      tagline: "🏠 I live quietly—and give everything."
    },
    "Rades Spirito": {
      animal: "Vulture",
      personality: "Cunning, erratic, expressive",
      strengths: "Reanimation magic, persistence, unpredictability",
      weaknesses: "Bitterness, instability",
      tagline: "🧟 I raise the dead—and my voice."
    },
    "Noelle Silva": {
      animal: "Swan",
      personality: "Proud, protective, evolving",
      strengths: "Water magic, resilience, growth",
      weaknesses: "Insecurity, stubborn pride",
      tagline: "🌊 Royal blood, rogue heart."
    },
    "Klaus Lunettes": {
      animal: "Stag",
      personality: "Protective, principled, loyal",
      strengths: "Steel magic, strategy, honor",
      weaknesses: "Rigidity, pride",
      tagline: "🛡️ I guard ideals with iron."
    },
    "Nacht Faust": {
      animal: "Raven",
      personality: "Mysterious, strategic, brooding",
      strengths: "Shadow magic, deception, planning",
      weaknesses: "Isolation, guilt",
      tagline: "🌑 I walk with demons so others don’t have to."
    },
    "Mereoleona Vermillion": {
      animal: "Lioness",
      personality: "Fierce, wild, confident",
      strengths: "Fire magic, leadership, fearlessness",
      weaknesses: "Impatience, intensity",
      tagline: "🔥 I don’t lead—I blaze."
    },
    "Fuegoleon Vermillion": {
      animal: "Lion",
      personality: "Balanced, noble, strategic",
      strengths: "Fire magic, honor, leadership",
      weaknesses: "Rigidity, pride",
      tagline: "🔥 I burn with purpose, not rage."
    },
    "Leopold Vermillion": {
      animal: "Tiger",
      personality: "Energetic, proud, growth-driven",
      strengths: "Flame magic, ambition, courage",
      weaknesses: "Impulsiveness, insecurity",
      tagline: "🔥 I burn to prove myself."
    },
    "William Vangeance": {
      animal: "Hawk",
      personality: "Noble, analytical, burdened",
      strengths: "World Tree magic, leadership, vision",
      weaknesses: "Guilt, secrecy",
      tagline: "🌳 I root for peace, even in shadows."
    },
    "Finral Roulacase": {
      animal: "Butterfly",
      personality: "Charming, indecisive, peace-seeking",
      strengths: "Spatial magic, diplomacy, agility",
      weaknesses: "Avoidance, insecurity",
      tagline: "🌀 I open doors—and escape through them."
    },
    "Grey": {
      animal: "Mouse",
      personality: "Shy, transformative, empathetic",
      strengths: "Transformation magic, humility, supportiveness",
      weaknesses: "Low self-esteem, fear",
      tagline: "🐭 I change shapes, not hearts."
    },
    "Rill Boismortier": {
      animal: "Chameleon",
      personality: "Creative, emotional, unpredictable",
      strengths: "Painting magic, imagination, spontaneity",
      weaknesses: "Immaturity, impulsiveness",
      tagline: "🎨 I paint chaos into beauty."
    },
    "Mimosa Vermillion": {
      animal: "Deer",
      personality: "Caring, intuitive, emotionally intelligent",
      strengths: "Plant magic, healing, empathy",
      weaknesses: "Hesitation, idealism",
      tagline: "🌿 Kindness is my strongest spell."
    },
    "Sol Marron": {
      animal: "Badger",
      personality: "Earthy, protective, headstrong",
      strengths: "Earth magic, loyalty, strength",
      weaknesses: "Jealousy, impulsiveness",
      tagline: "🌱 I stand firm—and dig deep."
    },
    "Secre Swallowtail": {
      animal: "Bat",
      personality: "Quiet, clever, loyal",
      strengths: "Sealing magic, stealth, wisdom",
      weaknesses: "Isolation, secrecy",
      tagline: "🦇 I seal truths and guard legacies."
    },
    "Sally": {
      animal: "Ferret",
      personality: "Experimental, intuitive, eccentric",
      strengths: "Gel magic, invention, curiosity",
      weaknesses: "Obsession, recklessness",
      tagline: "🧪 I test limits—and people."
    },
    "Magna Swing": {
      animal: "Boar",
      personality: "Fiery, loyal, reckless",
      strengths: "Explosive magic, grit, bravery",
      weaknesses: "Impulsiveness, pride",
      tagline: "🔥 I fight loud, live proud."
    },
    "Sekke Bronzazza": {
      animal: "Peacock",
      personality: "Flashy, insecure, attention-seeking",
      strengths: "Bronze magic, persistence, adaptability",
      weaknesses: "Delusion, cowardice",
      tagline: "🪙 I flex hard—even when I flop."
    },
    "Vanessa Enoteca": {
      animal: "Cat",
      personality: "Free-spirited, intuitive, seductive",
      strengths: "Thread magic, fate control, charm",
      weaknesses: "Avoidance, overindulgence",
      tagline: "🧵 I weave destiny—and drink to it."
    },
    "Ladros": {
      animal: "Falcon",
      personality: "Ambitious, intense, calculating",
      strengths: "Mana absorption, speed, strategy",
      weaknesses: "Arrogance, instability",
      tagline: "⚡ I devour power—and spit it back."
    },
    "Nozel Silva": {
      animal: "Peacock",
      personality: "Disciplined, proud, tactical",
      strengths: "Mercury magic, leadership, precision",
      weaknesses: "Arrogance, emotional restraint",
      tagline: "🪶 I strike with silver and silence."
    },
    "Jack the Ripper": {
      animal: "Hyena",
      personality: "Chaotic, thrill-seeking, unpredictable",
      strengths: "Slash magic, adaptability, aggression",
      weaknesses: "Instability, lack of empathy",
      tagline: "🔪 I carve through limits—and logic."
    },
    "Morgen Faust": {
      animal: "Stork",
      personality: "Idealistic, noble, self-sacrificing",
      strengths: "Light magic, leadership, integrity",
      weaknesses: "Overcommitment, martyrdom",
      tagline: "🌅 I shine for others—even in darkness."
    },
    "Langris Vaude": {
      animal: "Hawk",
      personality: "Competitive, bold, impulsive",
      strengths: "Spatial magic, precision, ambition",
      weaknesses: "Arrogance, emotional volatility",
      tagline: "🌀 I warp space—and expectations."
    },
    "Dorothy Unsworth": {
      animal: "Butterfly",
      personality: "Dreamy, imaginative, elusive",
      strengths: "Glamour magic, creativity, unpredictability",
      weaknesses: "Detachment, escapism",
      tagline: "🦋 I dream realities into existence."
    },
    "Patry": {
      animal: "Phoenix",
      personality: "Idealistic, intense, spiritual",
      strengths: "Light magic, leadership, conviction",
      weaknesses: "Obsession, betrayal trauma",
      tagline: "🌟 I shine for truth—even when it burns."
    },
    "Gordon Agrippa": {
      animal: "Mole",
      personality: "Quiet, thoughtful, misunderstood",
      strengths: "Poison magic, empathy, loyalty",
      weaknesses: "Social anxiety, silence",
      tagline: "☠️ I speak softly—and carry toxins."
    },
    "Rebecca Scarlet": {
      animal: "Rabbit",
      personality: "Optimistic, curious, emotionally open",
      strengths: "Charm, resilience, kindness",
      weaknesses: "Naivety, vulnerability",
      tagline: "💖 I blush through battles."
    },
    "Kahono": {
      animal: "Dolphin",
      personality: "Artistic, intuitive, healing",
      strengths: "Song magic, support, emotional clarity",
      weaknesses: "Physical fragility, emotional sensitivity",
      tagline: "🎶 I sing strength into silence."
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