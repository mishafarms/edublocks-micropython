export default function define(Blocks: Blockly.BlockDefinitions) {
    let Msg = {
        left: 'Left',
        right: 'Right',
        OTTO9_HOME_TEXT: 'home',
        OTTO9_HOME_TOOLTIP: 'Otto goes to home position straight',
        OTTO9_DIY_URL: 'https://wikifactory.com/+OttoDIY/otto-diy',
        OTTO9_HUMANOID_URL: 'https://wikifactory.com/+OttoDIY/humanoid',
        OTTO9_CALIBRATION: 'calibrate ',
        OTTO9_CALIBRATION_LEG: 'leg ',
        OTTO9_CALIBRATION_FOOT: 'foot ',
        OTTO9_CALIBRATION_ARM: 'arm ',
        OTTO9_CALIBRATION_TOOLTIP: 'use small positive and negative values iteratively,change gradually until is completely straight (90º)',
        OTTO9_EEPROM_TEXT: 'save Trims on EEPROM',
        OTTO9_EEPROM_TOOLTIP: 'Use only after completely straight(90º) one time, delete this BLOCK after for further programming',
        OTTO9_MOVE_TEXT: 'move',
        OTTO9_MOVE_TOOLTIP: 'Otto basic movements',
        OTTO9_MOVE_CHOICE: [['↑ forward', 'FORWARD'], ['↓ backward', 'BACKWARD'], ['↺ turn left', 'LEFT'], ['↻ turn right', 'RIGHT'], ['bend to the left', 'BENDLEFT'], ['bend to the right', 'BENDRIGHT'], ['shake left leg', 'SHAKELEFT'], ['shake right leg', 'SHAKERIGHT'], ['up', 'jump']],
        OTTO9_MOVEW_CHOICE: [['↑ forward', 'FORWARD'], ['↓ backward', 'BACKWARD'], ['↺ turn left', 'LEFT'], ['↻ turn right', 'RIGHT']],
        OTTO9_MOVE_SPEED_TEXT: 'speed',
        OTTO9_MOVE_SPEED_CHOICE: [['normal', '1000'], ['slow', '2000'], ['very slow', '3000'], ['fast', '750'], ['very fast', '500'], ['way to fast', '250']],
        OTTO9_MOVEW_SPEED_CHOICE: [['normal', '45'], ['slow', '20'], ['very slow', '10'], ['fast', '60'], ['very fast', '90']],
        OTTO9_DANCE_TEXT: 'dance',
        OTTO9_DANCE_TOOLTIP: 'Otto dance!',
        OTTO9_DANCE_CHOICE: [['moonwalk ⟵', 'moonwalkerLEFT'], ['moonwalk ⟶', 'moonwalkerRIGHT'], ['crossing ⟵', 'crusaitoLEFT'], ['crossing ⟶', 'crusaitoRIGHT'], ['flapping ↑', 'flappingFRONT'], ['flapping ↓', 'flappingBACK']],
        OTTO9_DANCE_SIZE_TEXT: 'size',
        OTTO9_DANCE_SIZE_CHOICE: [['normal', '25'], ['little', '10'], ['big', '40']],
        OTTO9_DO_TEXT: 'do',
        OTTO9_DO_TOOLTIP: 'Otto complex movements',
        OTTO9_DO_CHOICE: [['swing', 'swing'], ['updown', 'updown'], ['tiptoeSwing', 'tiptoeSwing'], ['jitter', 'jitter'], ['ascendingTurn', 'ascendingTurn']],
        OTTO9_GESTURE_TEXT: 'gesture',
        OTTO9_GESTURE_TOOLTIP: 'Emotional sounds combined with movements',
        OTTO9_GESTURE_CHOICE: [['😃 happy1', 'OttoSuperHappy'], ['🙂 happy2', 'OttoHappy'], ['🙁 sad', 'OttoSad'], ['😴 sleep', 'OttoSleeping'], ['😕 confused', 'OttoConfused'], ['😰 fretful', 'OttoFretful'], ['😍 love', 'OttoLove'], ['😡 angry', 'OttoAngry'], ['🤩 magic', 'OttoMagic'], ['😐 wave', 'OttoWave'], [' 😎 victory', 'OttoVictory'], ['😞 fail', 'OttoFail'], ['💩 fart', 'OttoFart']],
        OTTO9_SOUND_TEXT: 'sound',
        OTTO9_SOUND_TOOLTIP: 'Emotional sounds',
        OTTO9_SOUND_CHOICE: [['😃 happy1', 'S_superHappy'], ['🙂 happy2', 'S_happy'], ['😊 happy3', 'S_happy_short'], ['🙁 sad', 'S_sad'], ['😕 confused', 'S_confused'], ['🤗 cuddly', 'S_cuddly'], ['😮 Oh', 'S_OhOoh'], ['😯 OhOoh', 'S_OhOoh2'], ['😲 surprise', 'S_surprise'], ['🤖 connect', 'S_connection'], [' 🤖 disconnect', 'S_disconnection'], ['👇 push', 'S_buttonPushed'], ['❗ 1', 'S_mode1'], ['❗❗ 2', 'S_mode2'], ['❗❗❗ 3', 'S_mode3'], ['💤 sleep', 'S_sleeping'], ['💩 fart1', 'S_fart1'], ['💩 fart2', 'S_fart2'], ['💩 fart3', 'S_fart3'],],
        OTTO9_GETDISTANCE_TEXT: 'distance [cm]',
        OTTO9_GETDISTANCE_TOOLTIP: 'Ranging distance between 2cm to 400cm',
        OTTO9_GETOBSTACLE_TEXT: 'obstacle',
        OTTO9_OBSTACLE_CHOICE: [['close', '10'], ['very close', '3'], ['far', '30']],
        OTTO9_GETNOISE_TEXT: 'noise measured',
        OTTO9_GETNOISE_TOOLTIP: '100 is quiet, 500 noise and more than 1000 is loud, also adjust the sensor trimpot sensibility',
        OTTO9_GETTOUCH_TEXT: 'touch',
        OTTO9_GETTOUCH_TOOLTIP: 'use if conditional',
        OTTO9_GETG_TEXT: 'motion',
        OTTO9_MOUTH_TEXT: 'mouth',
        OTTO9_MOUTH_TOOLTIP: 'mouth emotion for the 8x8 LED matrix #0-30',
        OTTO9_MOUTH_CHOICE: [['😃 happy1', 'happyOpen'], ['🙂 happy2', 'happyClosed'], ['😊 smile', 'smile'], ['😦 sad1', '23'], ['🙁 sad2', '24'], ['😮 surprise', 'smallSurprise'], ['😲 Surprise2', 'bigSurprise'], ['😕 confused', 'confused'], ['😛 tongue', 'tongueOut'], ['🙃 silly', 'culito'], ['😑 serious', 'lineMouth'], ['🙄 upset', '21'], ['💖 heart', 'heart'], ['🦇 v1', 'vamp1'], ['🦇 v2', 'vamp2'], ['❌ no', 'xMouth'], ['✅ OK', 'okMouth'], ['❓?', '27'], ['⚡ thunder', 'thunder']],
        OTTO9_EYES_TEXT: 'eyes',
        OTTO9_EYES_TOOLTIP: 'eyes emotion for the 16x8 i2C LED matrix ',
        OTTO9_EYES_CHOICE: [['😃 happy1', 'happy_bmp'], ['🙂 happy2', 'eyes_bmp'], ['😦 sad', 'sad_bmp'], ['😡 angry1', 'angry_bmp'], ['😡 angry2', 'angry2_bmp'], ['😰 freetful', 'freetful_bmp'], ['😕 confused', 'confused_bmp'], ['😴 sleep', 'sleep_bmp'], ['😍 love', 'love_bmp'], ['😑 wave', 'wave_bmp'], ['🤩 magic', 'magic_bmp'], ['😞 fail', 'fail_bmp'], ['🤖 logo', 'logo_bmp'], ['❌❌ no', 'XX_bmp'], ['x x', 'xx_bmp'], ['▉', 'full_bmp']],
        OTTO9_EYESTEXT_TEXT: 'eyes text',
        OTTO9_EYES_CLEAR_TEXT: ' clear eyes',
        OTTO9_MATRIX_TOOLTIP: 'limited to CAPITALS A to Z NUMBERS 0 to 9 : ; < > : @, max.9 characters',
        OTTO9_MATRIXTEXT_TEXT: 'mouth text',
        OTTO9_CLEAR_TEXT: ' clear mouth',
        OTTO9_CLEAR_TOOLTIP: 'Turn off all LEDs of the mouth matrix 8x8',
        OTTO9_ARMS_TEXT: 'arms',
        OTTO9_ARMS_TOOLTIP: 'move the arms!',
        OTTO9_ARMS_CHOICE: [['hands up', 'HANDSUP'], ['handwave left', 'HANDWAVE1'], ['handwave right', 'HANDWAVE2']],
    };

    Blocks['otto9_home'] = {
        init() {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage('blockly/media/otto_plus.png', 48, 48, '*'))
                .appendField(Msg.OTTO9_HOME_TEXT);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#32D900');
            this.setTooltip(Msg.OTTO9_HOME_TOOLTIP);
            this.setHelpUrl(Msg.OTTO9_DIY_URL);
        }
    };

    Blocks['otto9_calibrate'] = {
        init() {
            this.appendDummyInput()
                .appendField(Msg.OTTO9_CALIBRATION + Msg.OTTO9_CALIBRATION_LEG + Msg.left)
                .appendField(new Blockly.FieldNumber(0, -90, 90), 'LL')
                .appendField(Msg.right)
                .appendField(new Blockly.FieldNumber(0, -90, 90), 'RL');
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Msg.OTTO9_CALIBRATION_FOOT + Msg.left)
                .appendField(new Blockly.FieldNumber(0, -90, 90), 'LF')
                .appendField(Msg.right)
                .appendField(new Blockly.FieldNumber(0, -90, 90), 'RF');
            this.setInputsInline(false);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#32D900');
            this.setTooltip(Msg.OTTO9_CALIBRATION_TOOLTIP);
            this.setHelpUrl(Msg.OTTO9_DIY_URL);
        }
    };

    Blocks['otto9_eeprom'] = {
        init() {
            this.appendDummyInput()
                .appendField(Msg.OTTO9_EEPROM_TEXT);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#ff6600');
            this.setTooltip(Msg.OTTO9_EEPROM_TOOLTIP);
            this.setHelpUrl(Msg.OTTO9_DIY_URL);
        }
    };

    Blocks['otto9_move'] = {
        init() {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage('blockly/media/otto_bend.png', 48, 48, '*'))
                .appendField(Msg.OTTO9_MOVE_TEXT)
                .appendField(new Blockly.FieldDropdown(Msg.OTTO9_MOVE_CHOICE), 'otto_move_sens');
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Msg.OTTO9_MOVE_SPEED_TEXT)
                .appendField(new Blockly.FieldDropdown(Msg.OTTO9_MOVE_SPEED_CHOICE), 'otto_move_speed');
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#32D900');
            this.setTooltip(Msg.OTTO9_MOVE_TOOLTIP);
            this.setHelpUrl(Msg.OTTO9_DIY_URL);
        }
    };

    Blocks['otto9_dance'] = {
        init() {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage('blockly/media/otto_moonwalk.png', 48, 48, '*'))
                .appendField(Msg.OTTO9_DANCE_TEXT)
                .appendField(new Blockly.FieldDropdown(Msg.OTTO9_DANCE_CHOICE), 'otto_dance_movement');
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Msg.OTTO9_MOVE_SPEED_TEXT)
                .appendField(new Blockly.FieldDropdown(Msg.OTTO9_MOVE_SPEED_CHOICE), 'otto_move_speed');
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Msg.OTTO9_DANCE_SIZE_TEXT)
                .appendField(new Blockly.FieldDropdown(Msg.OTTO9_DANCE_SIZE_CHOICE), 'otto_dance_size');
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#32D900');
            this.setTooltip(Msg.OTTO9_DANCE_TOOLTIP);
            this.setHelpUrl(Msg.OTTO9_DIY_URL);
        }
    };

    Blocks['otto9_do'] = {
        init() {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage('blockly/media/otto_do.png', 48, 48, '*'))
                .appendField(Msg.OTTO9_DO_TEXT).appendField(new Blockly.FieldDropdown(Msg.OTTO9_DO_CHOICE), 'otto_do_movement');
            this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Msg.OTTO9_MOVE_SPEED_TEXT).appendField(new Blockly.FieldDropdown(Msg.OTTO9_MOVE_SPEED_CHOICE), 'otto_move_speed');
            this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Msg.OTTO9_DANCE_SIZE_TEXT).appendField(new Blockly.FieldDropdown(Msg.OTTO9_DANCE_SIZE_CHOICE), 'otto_dance_size');
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#32D900');
            this.setTooltip(Msg.OTTO9_DO_TOOLTIP);
            this.setHelpUrl(Msg.OTTO9_DIY_URL);
        }
    };

    Blocks['otto9_gesture'] = {
        init() {
            this.appendDummyInput().appendField(new Blockly.FieldImage('blockly/media/otto_emoji.png', 22, 22, '*')).appendField(Msg.OTTO9_GESTURE_TEXT).appendField(new Blockly.FieldDropdown(Msg.OTTO9_GESTURE_CHOICE), 'otto_gesture');
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#32D900');
            this.setTooltip(Msg.OTTO9_GESTURE_TOOLTIP);
            this.setHelpUrl(Msg.OTTO9_DIY_URL);
        }
    };

    Blocks['otto9_sound'] = {
        init: function () {
            this.appendDummyInput().appendField(new Blockly.FieldImage('blockly/media/otto_music.png', 48, 48, '*')).appendField(Msg.OTTO9_SOUND_TEXT).appendField(new Blockly.FieldDropdown(Msg.OTTO9_SOUND_CHOICE), 'otto_sound');
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#32D900');
            this.setTooltip(Msg.OTTO9_SOUND_TOOLTIP);
            this.setHelpUrl(Msg.OTTO9_DIY_URL);
        }
    };

    Blocks['otto9_tone'] = {
        init: function () {
            this.appendDummyInput().appendField("🎼")
                .appendField(new Blockly.FieldDropdown([['C4', '262'], ['D4', '294'], ['E4', '330'], ['F4', '349'], ['G4', '392'], ['A4', '440'], ['B4', '494'], ['C5', '523'], ['D5', '587'], ['E5', '659'], ['F5', '698'], ['G5', '784'], ['A5', '880'], ['B5', '988'], ['C6', '1047'], ['D6', '1175'], ['E6', '1319'], ['F6', '1397'], ['G6', '1568'], ['A6', '1760'], ['B6', '1976']]), 'otto_note');
            this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(' ')
                .appendField(new Blockly.FieldDropdown([['\u266B', '125'], ['\u266A', '250'], ['\u2669', '500'], ['????', '1000'], ['??', '2000']]), 'otto_note_duration');
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#32D900');
            this.setTooltip(Msg.OTTO9_SOUND_TOOLTIP);
            this.setHelpUrl(Msg.OTTO9_DIY_URL);
        }
    };
}
