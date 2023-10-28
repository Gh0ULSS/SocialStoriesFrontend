// This page renders the stories dependent on the category selected in story lib.
// Accessed through http://localhost:3000/parent/story-library/category/:category, see Routing.js for further

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header, Footer, StoryTile } from "../../../../../global_components";
import { Box, Grid, Button, ButtonGroup } from "@mui/material";
import "./StoryPage.css";
import bathtimeimg from "../../../../../assets/images/bathtime.png";

//Getting ready in the morning
import boyimg from "../../../../../assets/images/boy_img.png";
import breakfastimg from "../../../../../assets/images/english-breakfast.png";

// Going to the Denstist
import smilegirlimg from "../../../../../assets/images/smile.png";
import womanimg from "../../../../../assets/images/woman.png";
import dentistimg from "../../../../../assets/images/dentist.png";
import teethimg from "../../../../../assets/images/teeth.png";
import dentaltoolimg from "../../../../../assets/images/dentalcare.png";
import brokentoothimg from "../../../../../assets/images/broken-tooth.png";
import strongtoothimg from "../../../../../assets/images/strongdentist.png";
import stronggirlimg from "../../../../../assets/images/girl-power.png";
import smileboyimg from "../../../../../assets/images/boysmile.png";
import strongimg from "../../../../../assets/images/strong.png";

//Listneing in class
import studentboyimg from "../../../../../assets/images/boystudent.png";
import studentgirlimg from "../../../../../assets/images/girlstudent.png";
import teachingimg from "../../../../../assets/images/training.png";
import listenBoyimg from "../../../../../assets/images/listenboy.png";
import listenGorlimg from "../../../../../assets/images/listeningGirl.png";
import boyGrilSTudentimg from "../../../../../assets/images/boyGirlstudents.png";
import brainimg from "../../../../../assets/images/brain.png";

//Growing older & stronger
import girlCycleimg from "../../../../../assets/images/GirlCycle.png";
import boyCycleimg from "../../../../../assets/images/BoyCycle.png";
import crawlimg from "../../../../../assets/images/crawl.png";
import babyimg from "../../../../../assets/images/baby.png";
import bookimg from "../../../../../assets/images/book.png";
import learningGril from "../../../../../assets/images/learningGirl.png";

//Home - Taking care of my Dog
import dogimg from "../../../../../assets/images/dog.png";
import foodimg from "../../../../../assets/images/pet-food.png";
import boyDogimg from "../../../../../assets/images/boyAndDog.png";
import familyimg from "../../../../../assets/images/family.png";
import dogwalkimg from "../../../../../assets/images/dog-walking.png";
import dogbedimg from "../../../../../assets/images/dogbed.png";

// Self Care - Brushing My Teeth
import brushimg from "../../../../../assets/images/brush.png";
import girlteethimg from "../../../../../assets/images/girlteeth.png";
import boyTeethimg from "../../../../../assets/images/boyTeeth.png";
import boysmile from "../../../../../assets/images/boysmile.png";
import hourglassimg from "../../../../../assets/images/hourglass.png";

// Home - Keeping my Room Clean
import bedroomimg from "../../../../../assets/images/bedroom.png";
import closetimg from "../../../../../assets/images/closet.png";
import bedimg from "../../../../../assets/images/bed.png";
import toyimg from "../../../../../assets/images/toys.png";

// Going Out - Going to the Park
import parkimg from "../../../../../assets/images/park.png";
import helloimg from "../../../../../assets/images/hello.png";
import byeimg from "../../../../../assets/images/bye.png";
import boyfamilyimg from "../../../../../assets/images/boyfamily.png";
import girlfamilyimg from "../../../../../assets/images/girlfamily.png";
import shoesimg from "../../../../../assets/images/shoes.png";
import holdhandsimg from "../../../../../assets/images/holding-hands.png";

// Social Skills - Making Friends
import friendsimg from "../../../../../assets/images/friends.png";
import friendTalkingimg from "../../../../../assets/images/girlBoyTalking.png";

// PLay Skills - Playing Nicly
import kindnessimg from "../../../../../assets/images/kindness.png";

// Emotional  - Feeling Calm
import emotionsimg from "../../../../../assets/images/emotions.png";
import girlbreathimg from "../../../../../assets/images/girlbreath.png";
import boybreathimg from "../../../../../assets/images/boybreath.png";
import numbersimg from "../../../../../assets/images/numbers.png";
import madgirlimg from "../../../../../assets/images/girlmad.png";
import madboyimg from "../../../../../assets/images/boymad.png";

// Communication   - Using my Words
import girltalkingig from "../../../../../assets/images/girltalking.png";
import boytalkingig from "../../../../../assets/images/boytalking.png";
import happyboyimg from "../../../../../assets/images/smileboy.png";

// Safety - Water Safety
import girlswimimg from "../../../../../assets/images/girlswim.png";
import boyswimimg from "../../../../../assets/images/boyswim.png";
import poolimg from "../../../../../assets/images/swimming-pool.png";
import lifejacketimg from "../../../../../assets/images/life-jacket.png";

// Self Care - Washing my hands
import washhandsimg from "../../../../../assets/images/washing-hands.png";
import sinkimg from "../../../../../assets/images/sink.png";
import happygirlsimeimg from "../../../../../assets/images/girl_img.png";
import boyhatimg from "../../../../../assets/images/boy_img.png";
import germsimg from "../../../../../assets/images/germs.png";

// Behaviour - Making Good Chocies
import thinkingGirlimg from "../../../../../assets/images/thinkingGirl.png";
import thinkingBoyimg from "../../../../../assets/images/thinkingBoy.png";

// Behavioural - Avoiding a fight
import fightimg from "../../../../../assets/images/fight.png";
import thanksimg from "../../../../../assets/images/thanks.png";
import boywalking from "../../../../../assets/images/boywalk.png";

// Education - Learning is fun
import studentlongHairimg from "../../../../../assets/images/girlstudentlonghair.png";
import schoolimg from "../../../../../assets/images/school.png";

// Educational - Taking care of my cat
import catimg from "../../../../../assets/images/cat.png";
import catgirlimg from "../../../../../assets/images/catGirl.png";
import litterimg from "../../../../../assets/images/cat-box.png";

// Education - Learning is fun
import zooimg from "../../../../../assets/images/zoo.png";

// Add imge Icon
import addimg from "../../../../../assets/images/add-image.png";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const StoryPage = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const stories = storiesData.stories.filter(
    (story) => story.type === category
  ); // Getting only stories with type of category.
  const [selected, setSelected] = useState(null);
  const colors = ["#E693DC", "#FE96AE", "#FFB99E", "#FED397"];

  //Default variables:
  const font = "Kalam";
  const pronoun = "he";
  const pronoun_g = "she";
  const Actor = "Gavin";
  const actor = "Gavin";
  const actor_g = "Sophia";

  const getDefaults = () => ({
    //Default perspective is third person
    "\\[Actor\\]": Actor,
    "\\[actor\\]": actor,
    "\\[actor2\\]": actor,
    "\\[Actor2\\]": actor,
    "\\[actor_g\\]": actor_g,
    "\\[actor2_g\\]": actor_g,
    "\\[pronouns\\]": pronoun,

    "\\[pronouns_g\\]": pronoun_g,
    "\\[her2\\]": "him",
    "\\[her_first\\]": "his",
    "\\[her_first_2\\]": "him",
    "\\[her_first_g\\]": "her",
    "\\[type\\]": "is",
    "want\\[\\]": "wants",
    "disagree\\[\\]": "disagrees",
    "feel\\[\\]": "feels",
    "\\[goes\\]": "goes",
    "\\[listens\\]": "listen",
    "I-2\\[\\]": pronoun,
    "\\[she_first\\]": "he",
    "\\[she_first_g\\]": "she",
    "\\[She_first\\]": "He",
    "\\[knows\\]": "knows",
    "\\[type2\\]": "is",
    "\\[grows\\]": "grows",
    "\\[type3\\]": "they",
    "\\[type4\\]": "has",
    "\\[takes\\]": "takes",
    "\\[understands\\]": "understands",
    "\\[clean's\\]": "clean's",
    "\\[pours\\]": "pours",
    "\\[sits\\]": "sits",
    "\\[him_static\\]": "him",
    "\\[his_static\\]": "his",
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
  });

  const applyDefaultSettings = (story) => {
    const replacements = getDefaults();

    return {
      ...story,
      pageDescriptions: story.pageDescriptions.map((description) => {
        let updatedText = description;
        for (let [key, value] of Object.entries(replacements)) {
          updatedText = updatedText.replace(new RegExp(key, "g"), value);
        }
        return updatedText;
      }),
    };
  };

  return (
    <div>
      <Header />
      <div className="mainStoryPage">
        {/* Page heading */}
        <Box p={3}>
          <h1>{category} Stories</h1>
        </Box>
        <Box p={3}>
          {/* Tiles containing all the stories of the category */}
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            {stories.map((story, index) => (
              <Grid item key={index}>
                <StoryTile
                  name={story.title}
                  image={story.titleImg}
                  onClick={() => setSelected(story)}
                  colorback={colors[index % colors.length]} // mod of len is there for cycling.
                  selected={selected === story}
                />
              </Grid>
            ))}
          </Grid>

          {/* Buttons -> EDIT STORY and VIEW STORY */}
          <Box display="flex" justifyContent="center" mt={10}>
            <ButtonGroup>
              {/*Edit story button */}
              <Button
                onClick={() =>
                  navigate("/parent/story-library/settings", {
                    state: {
                      story: selected,
                      font: font,
                      pronoun: pronoun,
                      Actor: Actor,
                    },
                  })
                }
                disabled={!selected}
                variant="contained"
                style={{
                  fontSize: "medium",
                  marginRight: "8px",
                  borderRadius: "4px",
                  width: "100px",
                }}
                sx={{
                  fontWeight: "bold",
                }}
              >
                Edit
              </Button>

              {/*View Story Button */}
              <Button
                onClick={() => {
                  if (selected) {
                    const view_story = applyDefaultSettings(selected);

                    navigate("/parent/story-library/bookview", {
                      state: {
                        story: view_story,
                        font: font,
                      },
                    });
                  }
                }}
                disabled={!selected}
                variant="contained"
                color="secondary"
                style={{
                  fontSize: "medium",
                  marginRight: "8px",
                  borderRadius: "4px",
                  width: "100px",
                }}
                sx={{
                  fontWeight: "bold",
                }}
              >
                View
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </div>
      <Footer />
    </div>
  );
};

export default StoryPage;

// STORY DATA -> Need to be placed in database //
const storiesData = {
  stories: [
    {
      id: "xxx",
      type: "Home",
      title: "Getting Ready in the Morning",
      titleImg: bathtimeimg,
      pageImages: [boyimg, brushimg, closetimg, breakfastimg, happyboyimg],
      pageDescriptions: [
        "Each morning, it's time for [actor] to get ready for the day ahead.",
        "[Actor] will start by brushing [her_first] teeth and washing [her_first] face to wake up.",
        "Then [actor] will pick out clothes that make [her_first_2] feel comfy and ready to take on the day.",
        "After that [actor] will have a healthy breakfast to give [her_first_2] energy.",
        "With everything done [actor] [type] ready to go out and have a great day!",
      ],
    },

    // Health - Going to the Denstist (girl)
    {
      id: "xxx",
      type: "Health",
      title: "Visiting the Dentist",
      titleImg: smilegirlimg,
      pageImages: [
        womanimg,
        dentistimg,
        teethimg,
        dentaltoolimg,
        brokentoothimg,
        smilegirlimg,
        strongtoothimg,
        stronggirlimg,
        smilegirlimg,
      ],
      pageDescriptions: [
        "[actor_g] [knows] that going to the dentist is important for keeping [her_first_g] teeth healthy.",
        "The dentist is a special doctor who helps take care of [her_first_g] teeth.",
        "The dentist will look at [her_first_g] teeth and make sure they are strong and healthy.",
        "Sometimes, the dentist might need to clean [her_first_g] teeth to keep them shiny and bright.",
        "If there's a small problem, the dentist will fix it. The dentist is here to help [actor2_g] have a healthy smile.",
        "So, visiting the dentist is a good thing to do for [her_first_g] teeth.",
        "It helps [actor2_g] have strong and healthy teeth that [she_first_g] can be proud of",
        "[actor_g] can be brave when [she_first_g] [goes] to the dentist.",
        "And after the visit, [actor_g] can feel proud of taking good care of [her_first_g] teeth.",
      ],
    },

    {
      id: "xxx",
      type: "Health",
      title: "Visiting the Dentist",
      titleImg: happyboyimg,
      pageImages: [
        happyboyimg,
        dentistimg,
        teethimg,
        dentaltoolimg,
        brokentoothimg,
        smileboyimg,
        strongtoothimg,
        strongimg,
        happyboyimg,
      ],
      pageDescriptions: [
        "[actor] [knows] that going to the dentist is important for keeping [her_first] teeth healthy.",
        "The dentist is a special doctor who helps take care of [her_first] teeth.",
        "The dentist will look at [her_first] teeth and make sure they are strong and healthy.",
        "Sometimes, the dentist might need to clean [her_first] teeth to keep them shiny and bright.",
        "If there's a small problem, the dentist will fix it. The dentist is here to help [actor2] have a healthy smile.",
        "So, visiting the dentist is a good thing to do for [her_first] teeth.",
        "It helps [actor2] have strong and healthy teeth that [she_first] can be proud of",
        "[actor] can be brave when [she_first] [goes] to the dentist.",
        "And after the visit, [actor] can feel proud of taking good care of [her_first] teeth.",
      ],
    },
    // Education -  Listening in class (boy and girl)
    {
      id: "xxx",
      type: "Educational",
      title: "Listening in Class",
      titleImg: studentboyimg,
      pageImages: [boyGrilSTudentimg, listenBoyimg, teachingimg, brainimg],
      pageDescriptions: [
        "[actor] [goes] to school to learn new things",
        "In class, [actor] can listen carefully to the teacher.",
        "Listening helps [actor2] understand and learn new things.",
        "When [actor] [listens], [she_first] become even smarter!",
      ],
    },
    {
      id: "xxx",
      type: "Educational",
      title: "Listening in Class",
      titleImg: studentgirlimg,
      pageImages: [boyGrilSTudentimg, listenGorlimg, teachingimg, brainimg],
      pageDescriptions: [
        "[actor_g] [goes] to school to learn new things",
        "In class, [actor_g] can listen carefully to the teacher.",
        "Listening helps [actor2_g] understand and learn new things.",
        "When [actor2_g] [listens], [she_first_g] become even smarter!",
      ],
    },
    // Gorwing up - Getting older
    {
      id: "xxx",
      type: "Growing-Up",
      title: "Getting Older & Stronger",
      titleImg: girlCycleimg,
      pageImages: [babyimg, crawlimg, bookimg, learningGril],
      pageDescriptions: [
        "[actor_g] [type2] growing up and getting older.",
        "As [actor_g] [grows], [type3] become stronger.",
        "And [type3] learn new things",
        "It's exciting to see how much [actor_g] can do as [type3] get older.",
      ],
    },

    {
      id: "xxx",
      type: "Growing-Up",
      title: "Getting Older & Stronger",
      titleImg: boyCycleimg,
      pageImages: [babyimg, crawlimg, bookimg, studentboyimg],
      pageDescriptions: [
        "[Actor] [type2] growing up and getting older.",
        "As [actor] [grows], [type3] become stronger.",
        "And [type3] learn new things",
        "It's exciting to see how much [actor] can do as [type3] get older.",
      ],
    },

    // Home - Taking care of my Dog
    {
      id: "xxx",
      type: "Home",
      title: "Taking care of my Dog",
      titleImg: dogimg,
      pageImages: [
        dogimg,
        foodimg,
        boyDogimg,
        familyimg,
        dogwalkimg,
        dogbedimg,
        dogimg,
      ],
      pageDescriptions: [
        "At home, [Actor] [type4] a special furry friend, a pet dog named Buddy",
        "Every day, [Actor] [takes] care of Buddy. [She_first] [pours] fresh water into [his_static] bowl and [gives] [him_static] delicious food.",
        "[Actor] also [knows] that pets need love and attention. [She_first] [sits] with Buddy and [gives] [him_static] gentle pets and scratches.",
        "[Actor] [understands] that taking care of Buddy means being responsible.",
        "[Actor] [clean's] up after Buddy when we go for walks together",
        "[Actor2] and Buddy at night can cuddle together, and keep each other warm and happy.",
        "[Actor] [loves] Buddy, and Buddy loves [actor2]",
      ],
    },

    // Home - Taking care of my Cat
    {
      id: "xxx",
      type: "Home",
      title: "Taking care of my Cat",
      titleImg: catimg,
      pageImages: [catgirlimg, foodimg, litterimg, catgirlimg],
      pageDescriptions: [
        "[actor_g] [loves] [her_first_g] pet cat, Fluffy.",
        "Every day, [actor_g] must give Fluffy food and water.",
        "[actor_g] must also [clean's] Fluffy's litter box regularly.",
        "Taking care of Fluffy makes [actor2_g] and Fluffy happy.",
      ],
    },

    // Self Care - Brushing My Teeth
    {
      id: "xxx",
      type: "Self-Care",
      title: "Brushing My Teeth",
      titleImg: studentgirlimg,
      pageImages: [girlteethimg, hourglassimg, brushimg, smilegirlimg],
      pageDescriptions: [
        "[actor_g] [brushes] [her_first_g] teeth in the morning and at night",
        "[actor_g] [brushes] [her_first_g] teeth gently, not too hard, for two minutes",
        "[actor_g] [spits] out [her_first_g] toothpaste",
        "[actor_g] [type2] happy when [she_first_g] [takes] care of [her_first_g] teeth.",
      ],
    },
    {
      id: "xxx",
      type: "Self-Care",
      title: "Brushing My Teeth",
      titleImg: studentboyimg,
      pageImages: [boyTeethimg, hourglassimg, brushimg, boysmile],
      pageDescriptions: [
        "[actor] [brushes] [her_first] teeth in the morning and at night",
        "[actor] [brushes] [her_first] teeth gently, not too hard, for two minutes",
        "[actor] [spits] out [her_first] toothpaste",
        "[actor] [type2] happy when [she_first] [takes] care of [her_first] teeth.",
      ],
    },
    // Home - Keeping my Room Clean
    {
      id: "xxx",
      type: "Home",
      title: "Keeping My Room Tidy",
      titleImg: studentboyimg,
      pageImages: [bedroomimg, closetimg, bedimg, toyimg],
      pageDescriptions: [
        "[actor] [keeps] [her_first] room tidy and cozy.",
        "[actor] [puts] [her_first] toys and clothes in their places every day",
        "[actor] [makes] [her_first] bed nice and neat.",
        "A tidy room helps [actor2] find things easily and feel happy",
      ],
    },

    {
      id: "xxx",
      type: "Home",
      title: "Keeping My Room Tidy",
      titleImg: studentgirlimg,
      pageImages: [bedroomimg, closetimg, bedimg, toyimg],
      pageDescriptions: [
        "[actor] [keeps] [her_first_g] room tidy and cozy.",
        "[actor] [puts] [her_first_g] toys and clothes in their places every day",
        "[actor] [makes] [her_first_g] bed nice and neat.",
        "A tidy room helps [actor2_g] find things easily and feel happy",
      ],
    },

    // Going Out - Going to the Park
    {
      id: "xxx",
      type: "Going-Out",
      title: "Going to the Park",
      titleImg: studentgirlimg,
      pageImages: [
        girlfamilyimg,
        shoesimg,
        holdhandsimg,
        parkimg,
        helloimg,
        byeimg,
      ],
      pageDescriptions: [
        "[actor_g] [type2] going to the park with [her_first_g] family",
        "Before leaving, [actor_g] [puts] on [her_first_g] shoes",
        "[actor_g] [holds] an adult's hand when [she_first_g] [crosses] the road.",
        "At the park, [actor_g] can play on the swings, slide, and have fun.",
        "[actor_g] [says] 'Hello' and [smiles] at other kids if they want to play together.",
        "When it's time to leave, [actor_g] [says] 'Goodbye' to the park.",
      ],
    },
    {
      id: "xxx",
      type: "Going-Out",
      title: "Going to the Park",
      titleImg: studentboyimg,
      pageImages: [
        boyfamilyimg,
        shoesimg,
        holdhandsimg,
        parkimg,
        helloimg,
        byeimg,
      ],
      pageDescriptions: [
        "[actor] [type2] going to the park with [her_first] family",
        "Before leaving, [actor] [puts] on [her_first] shoes",
        "[actor] [holds] an adult's hand when [she_first] [crosses] the road.",
        "At the park, [actor] can play on the swings, slide, and have fun.",
        "[actor] [says] 'Hello' and [smiles] at other kids if they want to play together.",
        "When it's time to leave, [actor] [says] 'Goodbye' to the park.",
      ],
    },

    // Social Skills - Making Friends
    {
      id: "xxx",
      type: "Social-Skills",
      title: "Making Friends",
      titleImg: womanimg,
      pageImages: [
        friendsimg,
        helloimg,
        friendTalkingimg,
        listenGorlimg,
        boysmile,
        womanimg,
      ],
      pageDescriptions: [
        "[actor_g] [likes] to make friends and have fun",
        "[actor_g] says 'hello' with a smile when [she_first_g] [meets] someone new.",
        "[actor_g] can ask, 'What's your name?' to get to know them better",
        "[actor_g] [listens] when others talk and [takes] turns in a conversation",
        "Using good manners, like saying 'please' and 'thank you', makes friends happy.",
        "Making friends and being kind to others makes [actor2_g] feel happy.",
      ],
    },

    {
      id: "xxx",
      type: "Social-Skills",
      title: "Making Friends",
      titleImg: studentboyimg,
      pageImages: [
        friendsimg,
        helloimg,
        friendTalkingimg,
        listenBoyimg,
        womanimg,
        studentboyimg,
      ],
      pageDescriptions: [
        "[actor] [likes] to make friends and have fun",
        "[actor] says 'hello' with a smile when [she_first] [meets] someone new.",
        "[actor] can ask, 'What's your name?' to get to know them better",
        "[actor] [listens] when others talk and [takes] turns in a conversation",
        "Using good manners, like saying 'please' and 'thank you', makes friends happy.",
        "Making friends and being kind to others makes [actor2] feel happy.",
      ],
    },

    // Play Skills - Playing Nicely
    {
      id: "xxx",
      type: "Play-Skills",
      title: "Playing Nicely",
      titleImg: womanimg,
      pageImages: [friendsimg, kindnessimg, toyimg, boysmile],
      pageDescriptions: [
        "[actor_g] [loves] to play with friends and have fun",
        "When [actor_g] [plays], [she_first_g] [uses] gentle hands and kind words",
        "[actor_g] [takes] turns and [shares] toys with [her_first_g] friends",
        "Playing nicely makes [actor2_g] and [her_first_g] friends happy",
      ],
    },

    {
      id: "xxx",
      type: "Play-Skills",
      title: "Playing Nicely",
      titleImg: happyboyimg,
      pageImages: [friendsimg, kindnessimg, toyimg, happyboyimg],
      pageDescriptions: [
        "[actor] [loves] to play with friends and have fun",
        "When [actor] [plays], [she_first] [uses] gentle hands and kind words",
        "[actor] [takes] turns and [shares] toys with [her_first] friends",
        "Playing nicely makes [actor2] and [her_first] friends happy",
      ],
    },

    // Emotional  - Feeling Calm
    {
      id: "xxx",
      type: "Emotional",
      title: "Feeling Calm",
      titleImg: madgirlimg,
      pageImages: [emotionsimg, girlbreathimg, numbersimg, toyimg, womanimg],
      pageDescriptions: [
        "Sometimes, [actor_g] [feels] different emotions like happy, sad, or excited.",
        "When [actor_g] [feels] upset or mad, [she_first_g] can take deep breaths.",
        "[actor_g] can count to three and breathe in and out slowly",
        "[actor_g] can also find a quiet spot to read a book or play with calming toys",
        "Taking deep breaths and finding a quiet place helps [actor2_g] feel calm again",
      ],
    },

    {
      id: "xxx",
      type: "Emotional",
      title: "Feeling Calm",
      titleImg: madboyimg,
      pageImages: [emotionsimg, boybreathimg, numbersimg, toyimg, boysmile],
      pageDescriptions: [
        "Sometimes, [actor] [feels] different emotions like happy, sad, or excited.",
        "When [actor] [feels] upset or mad, [she_first] can take deep breaths.",
        "[actor] can count to three and breathe in and out slowly",
        "[actor] can also find a quiet spot to read a book or play with calming toys",
        "Taking deep breaths and finding a quiet place helps [actor2] feel calm again",
      ],
    },

    // Communication   - Using my Words
    {
      id: "xxx",
      type: "Communication",
      title: "Using My Words",
      titleImg: womanimg,
      pageImages: [girltalkingig, toyimg, madgirlimg, emotionsimg, womanimg],
      pageDescriptions: [
        "[actor_g] [type2] learning to use [her_first_g] words to talk to others",
        "When [actor_g] [wants] a Toy, [she_first_g] can say, 'I want my toy, please'.",
        "If [actor_g] [type2] upset or needs help, [she_first_g] can say, 'I need help, please.'",
        "[actor_g] can use words to tell people how [she_first_g] [feels], like saying, 'I am happy' or 'I am sad.'",
        "Using words helps [actor2_g] communicate and understand others better",
      ],
    },

    {
      id: "xxx",
      type: "Communication",
      title: "Using My Words",
      titleImg: happyboyimg,
      pageImages: [boytalkingig, toyimg, madboyimg, emotionsimg, happyboyimg],
      pageDescriptions: [
        "[actor] [type2] learning to use [her_first] words to talk to others",
        "When [actor] [wants] a Toy, [she_first] can say, 'I want my toy, please'.",
        "If [actor] [type2] upset or needs help, [she_first] can say, 'I need help, please.'",
        "[actor] can use words to tell people how [she_first] [feels], like saying, 'I am happy' or 'I am sad.'",
        "Using words helps [actor2] communicate and understand others better",
      ],
    },

    // Safety - Water Safety
    {
      id: "xxx",
      type: "Safety",
      title: "Water Safety",
      titleImg: girlswimimg,
      pageImages: [poolimg, girlfamilyimg, lifejacketimg, girlswimimg],
      pageDescriptions: [
        "[actor_g] [knows] that being safe around water is important.",
        "[actor_g] should never go near water without an adult watching [her_first_g].",
        "[actor_g] always [wears] a life jacket when [she_first_g] [type2] in a boat or near deep water.",
        "Being safe around water helps [actor2_g] have fun and enjoy swimming safely.",
      ],
    },

    {
      id: "xxx",
      type: "Safety",
      title: "Water Safety",
      titleImg: boyswimimg,
      pageImages: [poolimg, familyimg, lifejacketimg, boyswimimg],
      pageDescriptions: [
        "[actor] [knows] that being safe around water is important.",
        "[actor] should never go near water without an adult watching [her_first_2].",
        "[actor] always [wears] a life jacket when [she_first] [type2] in a boat or near deep water.",
        "Being safe around water helps [actor2] have fun and enjoy swimming safely.",
      ],
    },

    // Self Care - Washing hands
    {
      id: "xxx",
      type: "Self-Care",
      title: "Washing My hands",
      titleImg: happygirlsimeimg,
      pageImages: [womanimg, sinkimg, washhandsimg, hourglassimg, germsimg],
      pageDescriptions: [
        "[actor_g] [knows] that washing [her_first_g] hands is important to stay healthy",
        "Before eating, [actor_g] [goes] to the sink",
        "[actor_g] [uses] soap and water to wash [her_first_g] hands",
        "[actor_g] [counts] to 30 while washing [her_first_g] hands.",
        "Washing hands helps [actor2_g] stay safe from bad germs.",
      ],
    },

    {
      id: "xxx",
      type: "Self-Care",
      title: "Washing My hands",
      titleImg: boyhatimg,
      pageImages: [happyboyimg, sinkimg, washhandsimg, hourglassimg, germsimg],
      pageDescriptions: [
        "[actor] [knows] that washing [her_first] hands is important to stay healthy",
        "Before eating, [actor] [goes] to the sink",
        "[actor] [uses] soap and water to wash [her_first] hands",
        "[actor] [counts] to 30 while washing [her_first] hands.",
        "Washing hands helps [actor2] stay safe from bad germs.",
      ],
    },

    // Behaviour - Making Good Choices
    {
      id: "xxx",
      type: "Behavioral",
      title: "Making Good Choices",
      titleImg: happygirlsimeimg,
      pageImages: [
        thinkingGirlimg,
        womanimg,
        listenGorlimg,
        friendTalkingimg,
        smilegirlimg,
      ],
      pageDescriptions: [
        "[actor_g] [knows] that making good choices is important.",
        "When [actor_g] [makes] good choices, [she_first_g] [feels] happy",
        "[actor_g] [chooses] to listen when adults talk and follow their instructions.",
        "[actor_g] [uses] kind words and actions with friends and family.",
        "Making good choices makes [actor2_g] have a positive and happy day.",
      ],
    },

    {
      id: "xxx",
      type: "Behavioral",
      title: "Making Good Choices",
      titleImg: happyboyimg,
      pageImages: [
        thinkingBoyimg,
        happyboyimg,
        listenBoyimg,
        friendTalkingimg,
        happyboyimg,
      ],
      pageDescriptions: [
        "[actor] [knows] that making good choices is important.",
        "When [actor] [makes] good choices, [she_first_g] [feels] happy",
        "[actor] [chooses] to listen when adults talk and follow their instructions.",
        "[actor] [uses] kind words and actions with friends and family.",
        "Making good choices makes [actor2] have a positive and happy day.",
      ],
    },

    // Behavioural - Avoiding a fight
    {
      id: "xxx",
      type: "Behavioral",
      title: "Avoiding a fight",
      titleImg: fightimg,
      pageImages: [
        madboyimg,
        emotionsimg,
        friendTalkingimg,
        thanksimg,
        boywalking,
      ],
      pageDescriptions: [
        "At school, [actor] sometimes disagree[] with what other children do.",
        "[Actor] can feel strong emotions when watching the other children.",
        "When this happens [actor] will say “Please don’t do that I don’t like it”.",
        "If the children stop. [Actor] will thank the other students.",
        "if they don’t stop, [actor] will walk away from the situation to where [actor] feel[] more comfortable.",
      ],
    },

    // Education - Learning is fun
    {
      id: "xxx",
      type: "Educational",
      title: "Learning Is Fun!",
      titleImg: studentboyimg,
      pageImages: [schoolimg, boyGrilSTudentimg, bookimg, studentboyimg],
      pageDescriptions: [
        "[actor] [knows] that going to school and learning is exciting",
        "At school, [actor] [listens] to [her_first] teacher and [asks] questions when [she_first] [type2] curious.",
        "[actor] [reads] books, [solves] puzzles, and [learns] new things every day.",
        "Learning helps [actor2] grow smarter and discover new things.",
      ],
    },
    {
      id: "xxx",
      type: "Educational",
      title: "Learning Is Fun!",
      titleImg: studentlongHairimg,
      pageImages: [schoolimg, boyGrilSTudentimg, bookimg, studentlongHairimg],
      pageDescriptions: [
        "[actor_g] [knows] that going to school and learning is exciting",
        "At school, [actor_g] [listens] to [her_first_g] teacher and [asks] questions when [she_first_g] [type2] curious.",
        "[actor_g] [reads] books, [solves] puzzles, and [learns] new things every day.",
        "Learning helps [actor2_g] grow smarter and discover new things.",
      ],
    },

    // Education - Learning is fun
    {
      id: "xxx",
      type: "Going-Out",
      title: "Going to the Zoo",
      titleImg: boyhatimg,
      pageImages: [boyhatimg, shoesimg, zooimg, familyimg],
      pageDescriptions: [
        "[actor] [type2] going to the zoo today!",
        "[actor] [gets] ready by putting on comfortable clothes and shoes.",
        "At the zoo, [actor] [sees] many animals like lions, elephants, and monkeys.",
        "[actor] [listens] to adults and [stays] close to them.",
      ],
    },

    {
      id: "xxx",
      type: "Going-Out",
      title: "Going to the Zoo",
      titleImg: womanimg,
      pageImages: [womanimg, shoesimg, zooimg, girlfamilyimg],
      pageDescriptions: [
        "[actor_g] [type2] going to the zoo today!",
        "[actor_g] [gets] ready by putting on comfortable clothes and shoes.",
        "At the zoo, [actor_g] [sees] many animals like lions, elephants, and monkeys.",
        "[actor_g] [listens] to adults and [stays] close to them.",
      ],
    },

    // Behaviuoral - Avoiding a fight (add imges )
    {
      id: "xxx",
      type: "Behavioral",
      title: "Avoiding a fight",
      titleImg: addimg,
      pageDescriptions: [
        "At school, [actor] sometimes disagree[] with what other children do.",
        "[Actor] can feel strong emotions when watching the other children.",
        "When this happens [actor] will say “Please don’t do that I don’t like it”.",
        "If the children stop. [Actor] will thank the other students.",
        "If they don’t stop, [actor] will walk away from the situation to where [actor] feel[] more comfortable.",
      ],
    },

    // Behavioural - No Bitting
    {
      id: "xxx",
      type: "Behavioral",
      title: "Learning Not to Bite",
      titleImg: addimg,
      pageDescriptions: [
        "At school, [actor] [plays] with many friends during recess.",
        "Sometimes, when [actor] [gets] upset or frustrated, [actor] might feel like biting.",
        "But biting hurts others and it's not a kind way to show [her_first] feelings.",
        "Instead, [actor] can take a deep breath, count to three, or talk to a teacher about [her_first] feelings.",
        "By not biting, [actor] [shows] [her_first] friends that [she_first] [cares] about their feelings and wants to play safely.",
      ],
    },
  ],
};
