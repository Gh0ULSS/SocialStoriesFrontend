//This page is used to update story based on users settings.
//Utalises ReGex find and replace

export const updateStory = (story, settings) => {
  if (!story || !settings) {
    console.error("Settings or Story were not found !");
    return null;
  }

  let updatedStory = { ...story };

  const pronoun_g = "she";
  const actor_g = "Sophia";

  // Replace Story Perspective
  if (settings.perspective) {
    const perspectiveMap = {
      "first-person": {
        "\\[actor\\]": "I",
        "\\[Actor\\]": "I",
        "\\[actor2\\]": "me",
        "\\[actor_g\\]": "I",
        "\\[actor2_g\\]": "me",
        "\\[Actor2\\]": "Me",

        "I-2\\[\\]": "I",
        "\\[pronouns\\]": "I",

        "\\[her_first\\]": "my",
        "\\[her_first_g\\]": "my",
        "\\[her_first_2\\]": "me",
        "\\[she_first\\]": "I",
        "\\[She_first\\]": "I",
        "\\[she_first_g\\]": "I",

        //Verbs
        "\\[type\\]": "my",
        "\\[type2\\]": "am",
        "want\\[\\]": "want",
        "disagree\\[\\]": "disagree",
        "feel\\[\\]": "feel",
        "me\\[\\]": "her",
        "my\\[\\]": "her",
        "\\[goes\\]": "go",
        "\\[knows\\]": "know",
        "\\[listens\\]": "listen",
        "\\[grows\\]": "grow",
        "\\[type3\\]": "I",
        "\\[type4\\]": "have",
        "\\[takes\\]": "take",
        "\\[understands\\]": "understand",
        "\\[clean's\\]": "clean",
        "\\[pours\\]": "pour",
        "\\[sits\\]": "sit",
        "\\[loves\\]": "love",
        "\\[gives\\]": "give",
        "\\[gets\\]": "get",
        "\\[cares\\]": "care",
        "\\[plays\\]": "play",
        "\\[shows\\]": "show",
        "\\[brushes\\]": "brush",
        "\\[spits\\]": "spit",
        "\\[keeps\\]": "keep",
        "\\[puts\\]": "put",
        "\\[makes\\]": "make",
        "\\[holds\\]": "hold",
        "\\[crosses\\]": "cross",
        "\\[says\\]": "say",
        "\\[smiles\\]": "smile",
        "\\[sees\\]": "see",
        "\\[stays\\]": "stay",
        "\\[asks\\]": "ask",
        "\\[reads\\]": "read",
        "\\[solves\\]": "solve",
        "\\[learns\\]": "learn",
        "\\[helps\\]": "help",
        "\\[feels\\]": "feel",
        "\\[chooses\\]": "choose",
        "\\[uses\\]": "use",
        "\\[counts\\]": "count",
        "\\[wears\\]": "wear",
        "\\[wants\\]": "want",
        "\\[shares\\]": "share",
        "\\[meets\\]": "meet",
        "\\[likes\\]": "like",
      },
      "third-person": {
        "\\[actor\\]": settings.personaName,
        "\\[Actor\\]": settings.personaName,
        "\\[actor_g\\]": actor_g,
        "\\[actor2_g\\]": actor_g,
        "\\[actor2\\]": settings.personaName,
        "\\[Actor2\\]": settings.personaName,

        "\\[pronouns_g\\]": pronoun_g,
        "\\[pronouns\\]": settings.pronoun,

        //Verbs
        "\\[type\\]": "is",
        "\\[type2\\]": "is",
        "want\\[\\]": `wants`,
        "disagree\\[\\]": "disagrees",
        "feel\\[\\]": "feels",
        "me\\[\\]": "me",
        "my\\[\\]": "my",
        "\\[goes\\]": "goes",
        "\\[knows\\]": "knows",
        "\\[listens\\]": "listens",
        "I-2\\[\\]": settings.pronoun,
        "\\[grows\\]": "grows",
        "\\[type3\\]": "they",
        "\\[type4\\]": "has",
        "\\[takes\\]": "takes",
        "\\[understands\\]": "understands",
        "\\[clean's\\]": "clean's",
        "\\[pours\\]": "pours",
        "\\[sits\\]": "sits",
        "\\[loves\\]": "loves",
        "\\[gives\\]": "gives",
        "\\[gets\\]": "gets",
        "\\[cares\\]": "cares",
        "\\[plays\\]": "plays",
        "\\[shows\\]": "shows",
        "\\[brushes\\]": "brushes",
        "\\[spits\\]": "spits",
        "\\[keeps\\]": "keeps",
        "\\[puts\\]": "puts",
        "\\[makes\\]": "makes",
        "\\[holds\\]": "holds",
        "\\[crosses\\]": "crosses",
        "\\[says\\]": "says",
        "\\[smiles\\]": "smiles",
        "\\[sees\\]": "sees",
        "\\[stays\\]": "stays",
        "\\[asks\\]": "asks",
        "\\[reads\\]": "reads",
        "\\[solves\\]": "solves",
        "\\[learns\\]": "learns",
        "\\[helps\\]": "helps",
        "\\[feels\\]": "feels",
        "\\[chooses\\]": "chooses",
        "\\[uses\\]": "uses",
        "\\[counts\\]": "counts",
        "\\[wears\\]": "wears",
        "\\[wants\\]": "wants",
        "\\[shares\\]": "shares",
        "\\[meets\\]": "meets",
        "\\[likes\\]": "likes",
      },
    };

    const replacements = perspectiveMap[settings.perspective];
    updatedStory.pageDescriptions = updatedStory.pageDescriptions.map(
      (description) => {
        let updatedText = description;
        for (let [key, val] of Object.entries(replacements)) {
          updatedText = updatedText.replace(new RegExp(key, "g"), val);
        }
        return updatedText;
      }
    );
  }

  // Replace Persona Name
  if (settings.personaName) {
    const rere_name = new RegExp(`\\b${settings.personaName}\\b`, "g");
    updatedStory = JSON.parse(
      JSON.stringify(updatedStory).replace(rere_name, settings.personaName)
    );
    const rere_g_name = new RegExp(`\\b${actor_g}\\b`, "g");
    updatedStory = JSON.parse(
      JSON.stringify(updatedStory).replace(rere_g_name, settings.personaName)
    );
  }

  // Replace Pronouns
  if (settings.pronoun) {
    const pronounsMap = {
      he: {
        "\\bhe\\b": "she",
        "\\bhis\\b": "her",
        "\\bhim\\b": "her",
        "\\[her2\\]": "him",
        "\\[her_first\\]": "his",
        "\\[her_first_2\\]": "him",
        "\\[she_first\\]": "he",
        "\\[She_first\\]": "He",
        "\\[she_first_g\\]": "he",
        "\\[her_first_g\\]": "his",
        "\\[him_static\\]": "him",
        "\\[his_static\\]": "his",
      },
      her: {
        "\\bshe\\b": "he",
        "\\bher\\b": "his",
        "\\bhers\\b": "his",
        "\\[her2\\]": "her",
        "\\[her_first\\]": "her",
        "\\[her_first_2\\]": "her",
        "\\[her_first_g\\]": "her",
        "\\[she_first\\]": "she",
        "\\[She_first\\]": "She",
        "\\[she_first_g\\]": "she",
        "\\[him_static\\]": "him",
        "\\[his_static\\]": "his",
      },
      they: {
        "\\bshe\\b": "they",
        "\\bhe\\b": "they",
        "\\bher\\b": "their",
        "\\bhis\\b": "their",
        "\\bhers\\b": "theirs",
        "\\bhim\\b": "them",
        "\\[her2\\]": "them",
        "\\[her_first\\]": "their",
        "\\[her_first_2\\]": "them",
        "\\[her_first_g\\]": "them",
        "\\[she_first\\]": "they",
        "\\[she_first_g\\]": "they",
        "\\[She_first\\]": "They",
        "\\[him_static\\]": "him",
        "\\[his_static\\]": "his",
      },
    };

    const replacements = pronounsMap[settings.pronoun];
    for (let [key, val] of Object.entries(replacements)) {
      const rere_pronoun = new RegExp(key, "g");
      updatedStory = JSON.parse(
        JSON.stringify(updatedStory).replace(rere_pronoun, val)
      );
    }
  }

  return updatedStory;
};
