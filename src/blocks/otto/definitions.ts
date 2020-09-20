
export default function define(Blocks: Blockly.BlockDefinitions) {
  let Msg = {
      left: "Left",
      right: "Right",
      OTTO9_HOME_TEXT: "home",
      OTTO9_HOME_TOOLTIP: "Otto goes to home position straight",
      OTTO9_DIY_URL: "https://wikifactory.com/+OttoDIY/otto-diy",
      OTTO9_HUMANOID_URL: "https://wikifactory.com/+OttoDIY/humanoid",
      OTTO9_CALIBRATION: 'calibrate ',
      OTTO9_CALIBRATION_LEG: 'leg ',
      OTTO9_CALIBRATION_FOOT: 'foot ',
      OTTO9_CALIBRATION_ARM: 'arm ',
      OTTO9_CALIBRATION_TOOLTIP: 'use small positive and negative values iteratively,change gradually until is completely straight (90º)',
      OTTO9_EEPROM_TEXT: 'save Trims on EEPROM',
      OTTO9_EEPROM_TOOLTIP: 'Use only after completely straight(90º) one time, delete this BLOCK after for further programming',
      OTTO9_MOVE_TEXT: "move",
      OTTO9_MOVE_TOOLTIP: "Otto basic movements",
      OTTO9_MOVE_CHOICE: [["↑ forward", "FORWARD"], ["↓ backward", "BACKWARD"], ["↺ turn left", "LEFT"], ["↻ turn right", "RIGHT"], ["bend to the left", "BENDLEFT"], ["bend to the right", "BENDRIGHT"], ["shake left leg", "SHAKELEFT"], ["shake right leg", "SHAKERIGHT"], ["up", "jump"]],
      OTTO9_MOVEW_CHOICE: [["↑ forward", "FORWARD"], ["↓ backward", "BACKWARD"], ["↺ turn left", "LEFT"], ["↻ turn right", "RIGHT"]], 
      OTTO9_MOVE_SPEED_TEXT: "speed",
      OTTO9_MOVE_SPEED_CHOICE: [["normal", "1000"],["slow", "2000"],["very slow", "3000"] , ["fast", "750"], ["very fast", "500"], ["way to fast", "250"]],
      OTTO9_MOVEW_SPEED_CHOICE: [["normal", "45"],["slow", "20"],["very slow", "10"] , ["fast", "60"], ["very fast", "90"]],
      OTTO9_DANCE_TEXT: "dance",
      OTTO9_DANCE_TOOLTIP: "Otto dance!",
      OTTO9_DANCE_CHOICE: [["moonwalk ⟵", "moonwalkerLEFT"],  ["moonwalk ⟶", "moonwalkerRIGHT"],["crossing ⟵", "crusaitoLEFT"],["crossing ⟶", "crusaitoRIGHT"], ["flapping ↑", "flappingFRONT"], ["flapping ↓", "flappingBACK"]],
      OTTO9_DANCE_SIZE_TEXT: "size",
      OTTO9_DANCE_SIZE_CHOICE: [["normal", "25"], ["little", "10"], ["big", "40"]],
      OTTO9_DO_TEXT: "do",
      OTTO9_DO_TOOLTIP: "Otto complex movements",
      OTTO9_DO_CHOICE: [ ["swing", "swing"], ["updown", "updown"], ["tiptoeSwing", "tiptoeSwing"], ["jitter", "jitter"], ["ascendingTurn", "ascendingTurn"]],
      OTTO9_GESTURE_TEXT: "gesture",
      OTTO9_GESTURE_TOOLTIP: "Emotional sounds combined with movements",
      OTTO9_GESTURE_CHOICE: [["😃 happy1", "OttoSuperHappy"],["🙂 happy2", "OttoHappy"], ["🙁 sad", "OttoSad"], ["😴 sleep", "OttoSleeping"], ["😕 confused", "OttoConfused"], ["😰 fretful", "OttoFretful"], ["😍 love", "OttoLove"], ["😡 angry", "OttoAngry"], ["🤩 magic", "OttoMagic"], ["😐 wave", "OttoWave"], [" 😎 victory", "OttoVictory"], ["😞 fail", "OttoFail"], ["💩 fart", "OttoFart"]],
      OTTO9_SOUND_TEXT: "sound",
      OTTO9_SOUND_TOOLTIP: "Emotional sounds",
      OTTO9_SOUND_CHOICE: [ ["😃 happy1", "S_superHappy"], ["🙂 happy2", "S_happy"], ["😊 happy3", "S_happy_short"], ["🙁 sad", "S_sad"], ["😕 confused", "S_confused"], ["🤗 cuddly", "S_cuddly"], ["😮 Oh", "S_OhOoh"], ["😯 OhOoh", "S_OhOoh2"], ["😲 surprise", "S_surprise"],["🤖 connect", "S_connection"], [" 🤖 disconnect", "S_disconnection"], ["👇 push", "S_buttonPushed"], ["❗ 1", "S_mode1"], ["❗❗ 2", "S_mode2"], ["❗❗❗ 3", "S_mode3"], ["💤 sleep", "S_sleeping"], ["💩 fart1", "S_fart1"], ["💩 fart2", "S_fart2"], ["💩 fart3", "S_fart3"],],
      OTTO9_GETDISTANCE_TEXT: "distance [cm]",
      OTTO9_GETDISTANCE_TOOLTIP: "Ranging distance between 2cm to 400cm",
      OTTO9_GETOBSTACLE_TEXT: "obstacle",
      OTTO9_OBSTACLE_CHOICE: [["close", "10"],["very close", "3"],["far", "30"]],
      OTTO9_GETNOISE_TEXT: "noise measured",
      OTTO9_GETNOISE_TOOLTIP: "100 is quiet, 500 noise and more than 1000 is loud, also adjust the sensor trimpot sensibility",
      OTTO9_GETTOUCH_TEXT: "touch",
      OTTO9_GETTOUCH_TOOLTIP: "use if conditional",
      OTTO9_GETG_TEXT: "motion",
      OTTO9_MOUTH_TEXT: "mouth",
      OTTO9_MOUTH_TOOLTIP: "mouth emotion for the 8x8 LED matrix #0-30",
      OTTO9_MOUTH_CHOICE: [["😃 happy1", "happyOpen"],["🙂 happy2", "happyClosed"], ["😊 smile", "smile"], ["😦 sad1", "23"], ["🙁 sad2", "24"], ["😮 surprise", "smallSurprise"], ["😲 Surprise2", "bigSurprise"], ["😕 confused", "confused"],["😛 tongue", "tongueOut"],["🙃 silly", "culito"],  ["😑 serious", "lineMouth"], ["🙄 upset", "21"], ["💖 heart", "heart"], ["🦇 v1", "vamp1"], ["🦇 v2", "vamp2"], ["❌ no", "xMouth"], ["✅ OK", "okMouth"],["❓?", "27"], ["⚡ thunder", "thunder"]],
      OTTO9_EYES_TEXT: "eyes",
      OTTO9_EYES_TOOLTIP: "eyes emotion for the 16x8 i2C LED matrix ",
      OTTO9_EYES_CHOICE: [["😃 happy1", "happy_bmp"],["🙂 happy2", "eyes_bmp"], ["😦 sad", "sad_bmp"], ["😡 angry1", "angry_bmp"], ["😡 angry2", "angry2_bmp"], ["😰 freetful", "freetful_bmp"], ["😕 confused", "confused_bmp"],["😴 sleep", "sleep_bmp"],["😍 love", "love_bmp"],  ["😑 wave", "wave_bmp"], ["🤩 magic", "magic_bmp"], ["😞 fail", "fail_bmp"], ["🤖 logo", "logo_bmp"], ["❌❌ no", "XX_bmp"], ["x x", "xx_bmp"],["▉", "full_bmp"]],
      OTTO9_EYESTEXT_TEXT: "eyes text",
      OTTO9_EYES_CLEAR_TEXT: " clear eyes",
      OTTO9_MATRIX_TOOLTIP: "limited to CAPITALS A to Z NUMBERS 0 to 9 : ; < > : @, max.9 characters",
      OTTO9_MATRIXTEXT_TEXT: "mouth text",
      OTTO9_CLEAR_TEXT: " clear mouth",
      OTTO9_CLEAR_TOOLTIP: "Turn off all LEDs of the mouth matrix 8x8",
      OTTO9_ARMS_TEXT: "arms",
      OTTO9_ARMS_TOOLTIP: "move the arms!",
      OTTO9_ARMS_CHOICE: [["hands up", "HANDSUP"], ["handwave left", "HANDWAVE1"], ["handwave right", "HANDWAVE2"]],
  };

  Blocks['import_otto'] = {
    init() {
      this.appendDummyInput()
        .appendField('import otto');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Imports the otto library.');
      this.setHelpUrl(Msg.OTTO9_DIY_URL);
    },
  };

  Blockly.Blocks['otto'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Otto"), "Otto")
        .appendField("= otto.Otto()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#32D900");
      this.setTooltip("Create an Otto object");
      this.setHelpUrl(Msg.OTTO9_DIY_URL);
    }
  };

  Blocks['otto_init'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Otto"), "Otto")
        .appendField(".init(YL")
        .appendField(new Blockly.FieldNumber(5, 0, 40), "YL")
        .appendField(", YR")
        .appendField(new Blockly.FieldNumber(12, 0, 40), "YR")
        .appendField(", RR")
        .appendField(new Blockly.FieldNumber(13, 0, 40), "RR")
        .appendField(", RL")
        .appendField(new Blockly.FieldNumber(14, 0, 40), "RL")
        .appendField(", Load Calibration")
        .appendField(new Blockly.FieldDropdown([["True","True"], ["False","False"]]), "load_calibration")
        .appendField(",")
    this.appendDummyInput()
        .appendField("             NoiseSensor")
        .appendField(new Blockly.FieldNumber(0, -1, 40), "NoiseSensor")
        .appendField(", Buzzer")
        .appendField(new Blockly.FieldNumber(1, -1, 40), "Buzzer")
        .appendField(", US Trigger")
        .appendField(new Blockly.FieldNumber(2, -1, 40), "USTrigger")
        .appendField(", US Echo")
        .appendField(new Blockly.FieldNumber(3, -1, 40), "USEcho")
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#32D900");
      this.setTooltip("Init Otto's pins");
      this.setHelpUrl(Msg.OTTO9_DIY_URL);
    }
  };

  Blocks['otto_home'] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage('blockly/media/otto_plus.png', 48, 48, "*"))
        .appendField(new Blockly.FieldTextInput("Otto"), "Otto")
        .appendField(Msg.OTTO9_HOME_TEXT);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#32D900");
      this.setTooltip(Msg.OTTO9_HOME_TOOLTIP);
      this.setHelpUrl(Msg.OTTO9_DIY_URL);
    }
  };

  Blocks['otto_calibrate'] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Otto"), "Otto")
        .appendField(Msg.OTTO9_CALIBRATION + Msg.OTTO9_CALIBRATION_LEG + Msg.left)
        .appendField(new Blockly.FieldNumber(0, -90, 90), "LL")
        .appendField(Msg.right)
        .appendField(new Blockly.FieldNumber(0, -90, 90), "RL")
      this.appendDummyInput()
	.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Msg.OTTO9_CALIBRATION_FOOT + Msg.left)
        .appendField(new Blockly.FieldNumber(0, -90, 90), "LF")
        .appendField(Msg.right)
        .appendField(new Blockly.FieldNumber(0, -90, 90), "RF")
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#32D900");
      this.setTooltip(Msg.OTTO9_CALIBRATION_TOOLTIP)
      this.setHelpUrl(Msg.OTTO9_DIY_URL);
    }
  };

  Blocks['otto_eeprom'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Otto"), "Otto")
        .appendField(".saveTrimsOnEEPROM()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#32D900");
      this.setTooltip("Save the trim values to EEPROM");
      this.setHelpUrl(Msg.OTTO9_DIY_URL);
    }
  };

  Blocks['otto_move'] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage('blockly/media/otto_bend.png', 48, 48, "*"))
        .appendField(new Blockly.FieldTextInput("Otto"), "Otto")
        .appendField(Msg.OTTO9_MOVE_TEXT)
        .appendField(new Blockly.FieldDropdown(Msg.OTTO9_MOVE_CHOICE), "otto_move")
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
	.appendField(Msg.OTTO9_MOVE_SPEED_TEXT)
        .appendField(new Blockly.FieldDropdown(Msg.OTTO9_MOVE_SPEED_CHOICE), "otto_speed");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#32D900");
      this.setTooltip(Msg.OTTO9_MOVE_TOOLTIP);
      this.setHelpUrl(Msg.OTTO9_DIY_URL);
    }
  };

  Blocks['otto_walk'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Otto"), "Otto")
        .appendField(".walk(steps")
        .appendField(new Blockly.FieldNumber(1, 1), "steps")
        .appendField(", time")
        .appendField(new Blockly.FieldNumber(0, 640, 1400), "time")
        .appendField(", direction")
        .appendField(new Blockly.FieldDropdown([["Left","1"], ["Right","-1"]]), "dir")
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#32D900");
      this.setTooltip("Walk some # of steps, Left or Right");
      this.setHelpUrl(Msg.OTTO9_DIY_URL);
    }
  };
}
