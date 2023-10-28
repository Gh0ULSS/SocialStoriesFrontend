// Found at http://localhost:3000/parent/PECS/pec-libary/pec-selection
import React from "react";
import { Header, Footer, PECSTile } from "../../../../../global_components";
import { Grid } from "@mui/material";
import "./pecsLib.css";

// Import Images
import bathtimeimg from "../../../../../assets/images/bathtime.png";
import brushTeethimg from "../../../../../assets/images/brushing-teeth.png";
import crabimg from "../../../../../assets/images/crab.png";
import snakeimg from "../../../../../assets/images/snake.png";
import showerimg from "../../../../../assets/images/shower.png";
import Breakfastimg from "../../../../../assets/images/english-breakfast.png";
import lunchimg from "../../../../../assets/images/lunch-time.png";
import dinimg from "../../../../../assets/images/dinner.png";
import toiletimg from "../../../../../assets/images/toil.png";
import hairimg from "../../../../../assets/images/comb.png";
import giraffeimge from "../../../../../assets/images/giraffe.png";
import rayimg from "../../../../../assets/images/stingray.png";
import turtleimg from "../../../../../assets/images/turtle.png";
import schoolimg from "../../../../../assets/images/school.png";
import catimg from "../../../../../assets/images/cat.png";
import dogimg from "../../../../../assets/images/dog.png";
import madimg from "../../../../../assets/images/angry.png";
import sadimg from "../../../../../assets/images/cry.png";
import happyimg from "../../../../../assets/images/happy.png";
import loveimg from "../../../../../assets/images/love.png";
import bedtimeing from "../../../../../assets/images/sleep.png";
import appleimg from "../../../../../assets/images/apple.png";
import bananaimg from "../../../../../assets/images/bananas.png";
import grapeimg from "../../../../../assets/images/grapes.png";
import starwbimg from "../../../../../assets/images/strawberry.png";
import tomatoimg from "../../../../../assets/images/tomato.png";
import carrotimg from "../../../../../assets/images/carrot.png";
import cabbageimg from "../../../../../assets/images/cabbage.png";
import saladimg from "../../../../../assets/images/salad.png";
import forkimg from "../../../../../assets/images/fork.png";
import knifimg from "../../../../../assets/images/knife.png";
import spoonimg from "../../../../../assets/images/spoon.png";
import busimg from "../../../../../assets/images/bus.png";
import carimg from "../../../../../assets/images/car.png";
import boatimg from "../../../../../assets/images/boat.png";
import planeimg from "../../../../../assets/images/plane.png";
import yesimg from "../../../../../assets/images/yes.png";
import noimg from "../../../../../assets/images/no.png";
import stopimg from "../../../../../assets/images/stop.png";
import spiderimg from "../../../../../assets/images/spider.png";
import talkimg from "../../../../../assets/images/talking.png";
import soapimg from "../../../../../assets/images/selfcare.png";
import docimg from "../../../../../assets/images/medical-team.png";
import workimg from "../../../../../assets/images/worker.png";
import boyimg from "../../../../../assets/images/boy_img.png";
import girlimg from "../../../../../assets/images/girl_img.png";
import washhandimg from "../../../../../assets/images/washing-hands.png";
import washbodyimg from "../../../../../assets/images/bodywash.png";
import washfaceimg from "../../../../../assets/images/face.png";
import washhairimg from "../../../../../assets/images/hair-washing.png";
import dolphinimg from "../../../../../assets/images/dolphin.png";
import sharkimg from "../../../../../assets/images/shark.png";
import hermitimg from "../../../../../assets/images/hermit-crab.png";
import lionimg from "../../../../../assets/images/lion.png";
import bunnyimg from "../../../../../assets/images/bunny.png";
import reindeerimg from "../../../../../assets/images/reindeer.png";
import santaimg from "../../../../../assets/images/santa.png";
import elfimg from "../../../../../assets/images/elf.png";
import toothfairyimg from "../../../../../assets/images/tooth-fairy.png";
import easterbunimg from "../../../../../assets/images/easterbunny.png";
import halloweenimg from "../../../../../assets/images/halloween.png";
import birdimg from "../../../../../assets/images/parrot.png";
import dragonimg from "../../../../../assets/images/dragon.png";
import topimg from "../../../../../assets/images/shirt.png";
import pantsimg from "../../../../../assets/images/pants.png";
import shortsimg from "../../../../../assets/images/shorts.png";
import underwareimg from "../../../../../assets/images/underwear.png";
import sockimg from "../../../../../assets/images/socks.png";
import pjimg from "../../../../../assets/images/pajamas.png";
import swimmersimg from "../../../../../assets/images/swimsuits.png";
import menswimmersimg from "../../../../../assets/images/manswimmers.png";
import hatimg from "../../../../../assets/images/hat.png";
import shoesimg from "../../../../../assets/images/shoes.png";
import goggleimg from "../../../../../assets/images/goggles.png";
import mermaidimg from "../../../../../assets/images/mermaid.png";
import mermanimg from "../../../../../assets/images/merman.png";
import unicornimg from "../../../../../assets/images/unicorn.png";
import phoeniximg from "../../../../../assets/images/phoenix.png";
import fairyimg from "../../../../../assets/images/fairy.png";
import bikeimg from "../../../../../assets/images/bicycle.png";
import swimmingimg from "../../../../../assets/images/swimmer.png";
import dressimg from "../../../../../assets/images/dress.png";
import parkimg from "../../../../../assets/images/park.png";
import zooimg from "../../../../../assets/images/zoo.png";
import farmimg from "../../../../../assets/images/farm.png";
import beachimg from "../../../../../assets/images/beach.png";
import lobstering from "../../../../../assets/images/lobster.png";
import cowimg from "../../../../../assets/images/cow.png";
import elephantimg from "../../../../../assets/images/elephant.png";
import frogimg from "../../../../../assets/images/frog.png";
import eatimg from "../../../../../assets/images/eat.png";
import sickimg from "../../../../../assets/images/sick.png";
import listeningimg from "../../../../../assets/images/listening.png";
import drinkimg from "../../../../../assets/images/drink.png";
import medicineimg from "../../../../../assets/images/medicine.png";
import Toothbrushimg from "../../../../../assets/images/brush.png";
import dentistimg from "../../../../../assets/images/dentist.png";
import auslanAimg from "../../../../../assets/images/auslan_A.png";
import auslanBimg from "../../../../../assets/images/auslan_B.png";
import auslanCimg from "../../../../../assets/images/auslan_C.png";
import auslanDimg from "../../../../../assets/images/auslan_D.png";
import auslanEimg from "../../../../../assets/images/auslan_E.png";
import auslanFimg from "../../../../../assets/images/auslan_F.png";
import auslanGimg from "../../../../../assets/images/auslan_G.png";
import auslanHimg from "../../../../../assets/images/auslan_H.png";
import auslanIimg from "../../../../../assets/images/auslan_I.png";
import auslanJimg from "../../../../../assets/images/auslan_J.png";
import auslanKimg from "../../../../../assets/images/auslan_K.png";
import auslanLimg from "../../../../../assets/images/auslan_L.png";
import auslanMimg from "../../../../../assets/images/auslan_M.png";
import auslanNimg from "../../../../../assets/images/auslan_N.png";
import auslanOimg from "../../../../../assets/images/auslan_O.png";
import auslanPimg from "../../../../../assets/images/auslan_P.png";
import auslanQimg from "../../../../../assets/images/auslan_Q.png";
import auslanRimg from "../../../../../assets/images/auslan_R.png";
import auslanSimg from "../../../../../assets/images/auslan_S.png";
import auslanTimg from "../../../../../assets/images/auslan_T.png";
import auslanUimg from "../../../../../assets/images/auslan_U.png";
import auslanVimg from "../../../../../assets/images/auslan_V.png";
import auslanWimg from "../../../../../assets/images/auslan_W.png";
import auslanXimg from "../../../../../assets/images/auslan_X.png";
import auslanYimg from "../../../../../assets/images/auslan_Y.png";
import auslanZimg from "../../../../../assets/images/auslan_Z.png";
import auslan1img from "../../../../../assets/images/auslan_1.png";
import auslan2img from "../../../../../assets/images/auslan_2.png";
import auslan3img from "../../../../../assets/images/auslan_3.png";
import auslan4img from "../../../../../assets/images/auslan_4.png";
import auslan5img from "../../../../../assets/images/auslan_5.png";
import auslan6img from "../../../../../assets/images/auslan_6.png";
import auslan7img from "../../../../../assets/images/auslan_7.png";
import auslan8img from "../../../../../assets/images/auslan_8.png";
import auslan9img from "../../../../../assets/images/auslan_9.png";
import auslan10img from "../../../../../assets/images/auslan_10.png";

const PecsLib = () => {
  return (
    <div>
      <Header />

      {/* Main Div - Contains whole page contnet */}
      <div className="mainDiv-PECSLIB">
        {/* Header */}
        <h1 id="h1-PECSLibary">PECS Libary</h1>
        {/* Grid */}
        <Grid container spacing={3} className={"Grid-PECS"}>
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 1 - Food - Breaksfast  */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Breakfast" image={Breakfastimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 1 - Food -  Lunch  */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Lunch" image={lunchimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/*  Category 1 - Food -  Dinner  */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Dinner" image={dinimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 1 - Food -  Salad  */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Salad" image={saladimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 1 - Food -  Apple  */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Apple" image={appleimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 1 - Food -  Banana  */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Banana" image={bananaimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 1 - Food -  Grapes  */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Grapes" image={grapeimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 1 - Food -  Strawberry  */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Strawberry" image={starwbimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 1 - Food -  Tomato  */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Tomato" image={tomatoimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 1 - Food -  Carrot  */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Carrot" image={carrotimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 1 - Food -  caboage  */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Cabbage" image={cabbageimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 1 - Food -  Fork  */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Fork" image={forkimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 1 - Food -  Knife  */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Knife" image={knifimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 1 - Food -  Spoon  */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Spoon" image={spoonimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 1 - Food -  Eat  */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Eating" image={eatimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 1 - Food -  Drinking  */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Drinking" image={drinkimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 2 - hygiene - Shower */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          <Grid item>
            <PECSTile name="Shower Time" image={showerimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 2 - hygiene - Bath */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Bath Time" image={bathtimeimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 2 - hygiene - wash hands */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Wash Hands" image={washhandimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 2 - hygiene - wash body */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Wash Body" image={washbodyimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 2 - hygiene - wash Face */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Wash Face" image={washfaceimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 2 - hygiene - wash Face */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Wash Hair" image={washhairimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 2 - hygiene - Bath */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Bed Time" image={bedtimeing} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 2 - hygiene - Brush Teeth */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Brush Teeth" image={brushTeethimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 2 - hygiene - Tooth Brush */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Tooth Brush" image={Toothbrushimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 2 - hygiene - Toilet */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Toilet" image={toiletimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 2 - hygiene - Brush Hair */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Brush Hair" image={hairimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 2 - hygiene - Soap */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Soap" image={soapimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 2 - hygiene - Shirt */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Shirt" image={topimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 2 - hygiene - Pants */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Pants" image={pantsimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 2 - hygiene - Pants */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Shorts" image={shortsimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 2 - hygiene - Underwear */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Underwear" image={underwareimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 2 - hygiene - Hat */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Hat" image={hatimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 2 - hygiene - Dress */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Dress" image={dressimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 2 - hygiene - Pajamas */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Pyjamas" image={pjimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 2 - hygiene - Socks */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Socks" image={sockimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 2 - hygiene - Hat */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Shoes" image={shoesimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 2 - hygiene - Swimmers - girl*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Swimmers" image={swimmersimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 2 - hygiene - Swimmers - man */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Swimmers" image={menswimmersimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 2 - hygiene - Googles */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Goggles" image={goggleimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 3 - Travel - Swimming */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Swimming" image={swimmingimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 3 - Travel - Park */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Park" image={parkimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 3 - Travel - Zoo */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Zoo" image={zooimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 3 - Travel - Farm */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Farm" image={farmimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 3 - Travel - Beach */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Beach" image={beachimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 3 - travel - school */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="School" image={schoolimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 3 - travel - Bus */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Bus" image={busimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 3 - travel - car */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Car" image={carimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 3 - travel - Boat */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Boat" image={[boatimg]} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 3 - travel - plane */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Plane" image={[planeimg]} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 3 - travel - Bike */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Bike" image={[bikeimg]} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 4 - emotions - ANgery*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Mad" image={madimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 4 - emotions - Sad*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Sad" image={sadimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 4 - emotions - happy*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Happy" image={happyimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 4 - emotions - Love*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Love" image={loveimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 4 - emotions - Stop*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Stop" image={stopimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 4 - emotions - yes*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Yes" image={yesimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 4 - emotions - no*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="No" image={noimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 5 - Communication/people - no*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Talking" image={talkimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 5 - Communication/people - No */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Listening" image={listeningimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 5 - Communication/people - Doctor*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Doctors" image={docimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 5 - Communication/people - Desntist */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Dentist" image={dentistimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 5 - Communication/people - Desntist */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Medicine" image={medicineimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 5 - Communication/people - Desntist */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Sick" image={sickimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 5 - Communication/people - Worker*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Worker" image={workimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 5 - Communication/people - boy*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Boy" image={boyimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 5 - Communication/people - girl */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Girl" image={girlimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 6 - Animals - Crab */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Crab" image={crabimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 6 -  Animals - snake */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Snake" image={snakeimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 6 - Animals - Giraffe */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Giraffe" image={giraffeimge} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 6 - Animals - Stringray*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Stingray" image={rayimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 6 - Animals - Turtle*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Turtle" image={turtleimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 6 - Animals - Cat*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Cat" image={catimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 6 - Animals - Dog*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Dog" image={dogimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 6 -  Animals - Spider*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Spider" image={spiderimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 6 -  Animals - Dolpin*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Dolphin" image={dolphinimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 6 -  Animals - Shark*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Shark" image={sharkimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 6 -  Animals - hermit Crab*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Hermit Crab" image={hermitimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 6 -  Animals - Lion*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Lion" image={lionimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 6 -  Animals - bunny*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Bunny" image={bunnyimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 6 -  Animals - Bird*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Bird" image={birdimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 6 -  Animals - Cow*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Cow" image={cowimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 6 -  Animals - Frog */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Frog" image={frogimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 6 -  Animals - Loster*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Lobster" image={lobstering} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 6 -  Animals - Elephanr*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Elephant" image={elephantimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 6 -  Animals - reindeer*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Reindeer" image={reindeerimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 7 -  Seaonal - Santa*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Santa" image={santaimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 7 -  Seaonal - elf*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Elf" image={elfimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 7 -  Seaonal - Tooth Fairy*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Tooth Fairy" image={toothfairyimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 7 -  Seaonal - Easta bunny*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Easter Bunny" image={easterbunimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 7 -  Seaonal - Halloween*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Halloween" image={halloweenimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 8 -  Fantasy - Dragon*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Dragon" image={dragonimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 8 -  Fantasy - Unicorn */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Unicorn" image={unicornimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 8 -  Fantasy - phoenix */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Phoenix" image={phoeniximg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 8 -  Fantasy - Mermiad */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Mermaid" image={mermaidimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 8 -  Fantasy - Merman */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Merman" image={mermanimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 8 -  Fantasy - Fairy */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Fairy" image={fairyimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - A  */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan A" image={auslanAimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - B  */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan B" image={auslanBimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - C */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan C" image={auslanCimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - D */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan D" image={auslanDimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - E */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan E" image={auslanEimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - F */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan F" image={auslanFimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - G */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan G" image={auslanGimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - H */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan H" image={auslanHimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - I */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan I" image={auslanIimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - J */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan J" image={auslanJimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - K */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan K" image={auslanKimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - L */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan L" image={auslanLimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - M */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan M" image={auslanMimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - N */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan N" image={auslanNimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - O */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan O" image={auslanOimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - p */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan P" image={auslanPimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - Q */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan Q" image={auslanQimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - R */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan R" image={auslanRimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - S */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan S" image={auslanSimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - T */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan T" image={auslanTimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - U */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan U" image={auslanUimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - V */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan V" image={auslanVimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - W */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan W" image={auslanWimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - X */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan X" image={auslanXimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - Y */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan Y" image={auslanYimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - Z */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan Z" image={auslanZimg} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - 1 */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan 1" image={auslan1img} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - 2 */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan 2" image={auslan2img} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - 3 */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan 3" image={auslan3img} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - 4 */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan 4" image={auslan4img} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - 5 */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan 5" image={auslan5img} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - 6 */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan 6" image={auslan6img} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - 7 */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan 7" image={auslan7img} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - 8 */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan 8" image={auslan8img} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - 9 */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan 9" image={auslan9img} />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Sign - 10 */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <PECSTile name="Auslan 10" image={auslan10img} />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default PecsLib;
