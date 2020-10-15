goog.require('Blockly.Msg');

export default function define(Blocks: Blockly.BlockDefinitions) {
    Blocks['otto9_init'] = {
        init() {
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_LEFT)
                .appendField('Otto ' + Blockly.Msg.OTTO9_INIT_TEXT + ' :');
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('LL')
                .appendField(new Blockly.FieldNumber(33, 0, 40), 'LL')
                .appendField('RL')
                .appendField(new Blockly.FieldNumber(25, 0, 40), 'RL');
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('LF')
                .appendField(new Blockly.FieldNumber(26, 0, 40), 'LF')
                .appendField('RF')
                .appendField(new Blockly.FieldNumber(27, 0, 40), 'RF');
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('Load Calibrate')
                .appendField(new Blockly.FieldDropdown([['true', 'True'], ['false', 'False']]), 'Cali');
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('Noise')
                .appendField(new Blockly.FieldNumber(34, 0, 40), 'Noise')
                .appendField('Buzzer')
                .appendField(new Blockly.FieldNumber(4, 0, 40), 'Buzzer');
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('Trigger')
                .appendField(new Blockly.FieldNumber(2, 0, 40), 'Trigger')
                .appendField('Echo')
                .appendField(new Blockly.FieldNumber(39, 0, 40), 'Echo');
            this.setInputsInline(false);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#32D900');
            this.setTooltip(Blockly.Msg.OTTO9_INIT_TOOLTIP);
            this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
        },
    };

    Blocks['otto9_inith'] = {
        init() {
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_LEFT)
                .appendField('Otto Humanoid ' + Blockly.Msg.OTTO9_INIT_TEXT + ' :');
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('LL')
                .appendField(new Blockly.FieldNumber(23, 0, 40), 'LL')
                .appendField('RL')
                .appendField(new Blockly.FieldNumber(22, 0, 40), 'RL');
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('LF')
                .appendField(new Blockly.FieldNumber(33, 0, 40), 'LF')
                .appendField('RF')
                .appendField(new Blockly.FieldNumber(25, 0, 40), 'RF');
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('LA')
                .appendField(new Blockly.FieldNumber(26, 0, 40), 'LA')
                .appendField('RA')
                .appendField(new Blockly.FieldNumber(27, 0, 40), 'RA');
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('Load Calibrate')
                .appendField(new Blockly.FieldDropdown([['true', 'True'], ['false', 'False']]), 'Cali');
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('Noise')
                .appendField(new Blockly.FieldNumber(34, 0, 40), 'Noise')
                .appendField('Buzzer')
                .appendField(new Blockly.FieldNumber(4, 0, 40), 'Buzzer');
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('Trigger')
                .appendField(new Blockly.FieldNumber(2, 0, 40), 'Trigger')
                .appendField('Echo')
                .appendField(new Blockly.FieldNumber(39, 0, 40), 'Echo');
            this.setInputsInline(false);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#59646f');
            this.setTooltip(Blockly.Msg.OTTO9_INIT_TOOLTIP);
            this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
        },
    };

    Blocks['otto9_home'] = {
        init() {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage('blockly/media/otto_plus.png', 48, 48, '*'))
                .appendField(Blockly.Msg.OTTO9_HOME_TEXT);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#32D900');
            this.setTooltip(Blockly.Msg.OTTO9_HOME_TOOLTIP);
            this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
        },
    };

    Blocks['otto9_calibration'] = {
        init() {
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_LEFT)
                .appendField(Blockly.Msg.OTTO9_CALIBRATION + ':');
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_CENTRE)
                .appendField(Blockly.Msg.OTTO9_CALIBRATION_LEG);
            this.appendValueInput('LL').setCheck('Number')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.LEFT);
            this.appendValueInput('RL').setCheck('Number')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.RIGHT);
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_CENTRE)
                .appendField(Blockly.Msg.OTTO9_CALIBRATION_FOOT);
            this.appendValueInput('LF').setCheck('Number')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.LEFT);
            this.appendValueInput('RF').setCheck('Number')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.RIGHT);
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_CENTRE)
                .appendField(Blockly.Msg.OTTO9_CALIBRATION_ARM);
            this.appendValueInput('LA').setCheck('Number')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.LEFT);
            this.appendValueInput('RA').setCheck('Number')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.RIGHT);
            this.setInputsInline(false);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#32D900');
            this.setTooltip(Blockly.Msg.OTTO9_CALIBRATION_TOOLTIP);
            this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
        },
    };

    Blocks['otto9_eeprom'] = {
        init() {
            this.appendDummyInput()
                .appendField(Blockly.Msg.OTTO9_EEPROM_TEXT);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#ff6600');
            this.setTooltip(Blockly.Msg.OTTO9_EEPROM_TOOLTIP);
            this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
        },
    };

    Blocks['otto9_move'] = {
        init() {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage('blockly/media/otto_bend.png', 48, 48, '*'))
                .appendField(Blockly.Msg.OTTO9_MOVE_TEXT)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_CHOICE), 'otto_move_sens');
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE), 'otto_move_speed');
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#32D900');
            this.setTooltip(Blockly.Msg.OTTO9_MOVE_TOOLTIP);
            this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
        },
    };

    Blocks['otto9_dance'] = {
        init() {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage('blockly/media/otto_moonwalk.png', 48, 48, '*'))
                .appendField(Blockly.Msg.OTTO9_DANCE_TEXT)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DANCE_CHOICE), 'otto_dance_movement');
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE), 'otto_move_speed');
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.OTTO9_DANCE_SIZE_TEXT)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DANCE_SIZE_CHOICE), 'otto_dance_size');
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#32D900');
            this.setTooltip(Blockly.Msg.OTTO9_DANCE_TOOLTIP);
            this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
        },
    };

    Blocks['otto9_do'] = {
        init() {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage('blockly/media/otto_do.png', 48, 48, '*'))
                .appendField(Blockly.Msg.OTTO9_DO_TEXT)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DO_CHOICE), 'otto_do_movement');
            this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE), 'otto_move_speed');
            this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.OTTO9_DANCE_SIZE_TEXT)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DANCE_SIZE_CHOICE), 'otto_dance_size');
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#32D900');
            this.setTooltip(Blockly.Msg.OTTO9_DO_TOOLTIP);
            this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
        },
    };

    Blocks['otto9_gesture'] = {
        init() {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage('blockly/media/otto_emoji.png', 22, 22, '*'))
                .appendField(Blockly.Msg.OTTO9_GESTURE_TEXT)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_GESTURE_CHOICE), 'otto_gesture');
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#32D900');
            this.setTooltip(Blockly.Msg.OTTO9_GESTURE_TOOLTIP);
            this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
        },
    };

    Blocks['otto9_sound'] = {
        init() {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage('blockly/media/otto_music.png', 48, 48, '*'))
                .appendField(Blockly.Msg.OTTO9_SOUND_TEXT)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_SOUND_CHOICE), 'otto_sound');
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#32D900');
            this.setTooltip(Blockly.Msg.OTTO9_SOUND_TOOLTIP);
            this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
        },
    };

    Blocks['otto9_tone'] = {
        init() {
            this.appendDummyInput()
                .appendField('🎼')
                .appendField(new Blockly.FieldDropdown([['C4', '262'], ['D4', '294'], ['E4', '330'], ['F4', '349'], ['G4', '392'], ['A4', '440'], ['B4', '494'], ['C5', '523'], ['D5', '587'], ['E5', '659'], ['F5', '698'], ['G5', '784'], ['A5', '880'], ['B5', '988'], ['C6', '1047'], ['D6', '1175'], ['E6', '1319'], ['F6', '1397'], ['G6', '1568'], ['A6', '1760'], ['B6', '1976']]), 'otto_note');
            this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
                .appendField(' ')
                .appendField(new Blockly.FieldDropdown([['\u266B', '125'], ['\u266A', '250'], ['\u2669', '500'], ['????', '1000'], ['??', '2000']]), 'otto_note_duration');
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#32D900');
            this.setTooltip(Blockly.Msg.OTTO9_SOUND_TOOLTIP);
            this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
        },
    };

    Blocks['otto9_getdistance'] = {
        init() {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage('blockly/media/sensor_ultrasound.png', 48, 48, '*'))
                .appendField(' = ')
                .appendField(Blockly.Msg.OTTO9_GETDISTANCE_TEXT);
            this.setInputsInline(true);
            this.setOutput(true, 'Number');
            this.setColour('#2a93e8');
            this.setTooltip(Blockly.Msg.OTTO9_GETDISTANCE_TOOLTIP);
            this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
        },
    };

    Blocks['otto9_obstacle'] = {
        init() {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage('blockly/media/sensor_ultrasound.png', 48, 48, "*"))
                .appendField(Blockly.Msg.OTTO9_GETOBSTACLE_TEXT)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_OBSTACLE_CHOICE), "obstacle");
            this.setInputsInline(true);
            this.setOutput(true, 'Boolean');
            this.setColour('#2a93e8');
            this.setTooltip(Blockly.Msg.OTTO9_GETDISTANCE_TOOLTIP);
            this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
        },
    };

    Blocks['otto9_getnoise'] = {
        init() {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage('blockly/media/sensor_noise.png', 48, 48, '*'))
                .appendField(' = ')
                .appendField(Blockly.Msg.OTTO9_GETNOISE_TEXT);
            this.setInputsInline(true);
            this.setOutput(true, 'Number');
            this.setColour('#2a93e8');
            this.setTooltip(Blockly.Msg.OTTO9_GETNOISE_TOOLTIP);
            this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
        },
    };

    Blocks['otto9_touchbutton'] = {
        init() {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage('blockly/media/sensor_touch.png', 48, 48, '*'))
                .appendField(' = ')
                .appendField(Blockly.Msg.OTTO9_GETTOUCH_TEXT);
            this.setInputsInline(true);
            this.setOutput(true, 'Number');
            this.setColour('#2a93e8');
            this.setTooltip(Blockly.Msg.OTTO9_GETTOUCH_TOOLTIP);
            this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
        },
    };

    Blocks['otto9_touched'] = {
        init() {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage('blockly/media/sensor_touch.png', 48, 48, '*'))
                .appendField(' = ')
                .appendField(Blockly.Msg.OTTO9_GETTOUCHED_TEXT);
            this.setInputsInline(true);
            this.setOutput(true, 'Boolean');
            this.setColour('#2a93e8');
            this.setTooltip(Blockly.Msg.OTTO9_GETTOUCHED_TOOLTIP);
            this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
        },
    };

    Blocks['otto9_matrix'] = {
        init() {
            this.appendDummyInput()
                .appendField('  ')
                .appendField('1')
                .appendField('  2')
                .appendField('  3')
                .appendField(' 4')
                .appendField(' 5')
                .appendField('  6');
            Blockly.FieldCheckbox.CHECK_CHAR = '▉';
            this.appendDummyInput()
                .appendField('1 ')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'otto9_matrix_pixel0')
                .appendField(new Blockly.FieldCheckbox('TRUE'), 'otto9_matrix_pixel1')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'otto9_matrix_pixel2')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'otto9_matrix_pixel3')
                .appendField(new Blockly.FieldCheckbox('TRUE'), 'otto9_matrix_pixel4')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'otto9_matrix_pixel5');
            this.appendDummyInput()
                .appendField('2 ')
                .appendField(new Blockly.FieldCheckbox('TRUE'), 'otto9_matrix_pixel6')
                .appendField(new Blockly.FieldCheckbox('TRUE'), 'otto9_matrix_pixel7')
                .appendField(new Blockly.FieldCheckbox('TRUE'), 'otto9_matrix_pixel8')
                .appendField(new Blockly.FieldCheckbox('TRUE'), 'otto9_matrix_pixel9')
                .appendField(new Blockly.FieldCheckbox('TRUE'), 'otto9_matrix_pixel10')
                .appendField(new Blockly.FieldCheckbox('TRUE'), 'otto9_matrix_pixel11');
            this.appendDummyInput()
                .appendField('3 ')
                .appendField(new Blockly.FieldCheckbox('TRUE'), 'otto9_matrix_pixel12')
                .appendField(new Blockly.FieldCheckbox('TRUE'), 'otto9_matrix_pixel13')
                .appendField(new Blockly.FieldCheckbox('TRUE'), 'otto9_matrix_pixel14')
                .appendField(new Blockly.FieldCheckbox('TRUE'), 'otto9_matrix_pixel15')
                .appendField(new Blockly.FieldCheckbox('TRUE'), 'otto9_matrix_pixel16')
                .appendField(new Blockly.FieldCheckbox('TRUE'), 'otto9_matrix_pixel17');
            this.appendDummyInput()
                .appendField('4 ')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'otto9_matrix_pixel18')
                .appendField(new Blockly.FieldCheckbox('TRUE'), 'otto9_matrix_pixel19')
                .appendField(new Blockly.FieldCheckbox('TRUE'), 'otto9_matrix_pixel20')
                .appendField(new Blockly.FieldCheckbox('TRUE'), 'otto9_matrix_pixel21')
                .appendField(new Blockly.FieldCheckbox('TRUE'), 'otto9_matrix_pixel22')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'otto9_matrix_pixel23');
            this.appendDummyInput()
                .appendField('5 ')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'otto9_matrix_pixel24')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'otto9_matrix_pixel25')
                .appendField(new Blockly.FieldCheckbox('TRUE'), 'otto9_matrix_pixel26')
                .appendField(new Blockly.FieldCheckbox('TRUE'), 'otto9_matrix_pixel27')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'otto9_matrix_pixel28')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'otto9_matrix_pixel29');
            this.setInputsInline(false);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#59646f');
            this.setTooltip(Blockly.Msg.OTTO9_MATRIX_TOOLTIP);
            this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
        },
    };

    Blocks['otto9_matrix8x8'] = {
        init() {
            this.appendDummyInput()
                .appendField('  ')
                .appendField(' 0')
                .appendField(' 1')
                .appendField(' 2')
                .appendField('  3')
                .appendField('  4')
                .appendField(' 5')
                .appendField(' 6')
                .appendField(' 7');
            Blockly.FieldCheckbox.CHECK_CHAR = '▉';
            this.appendDummyInput()
                .appendField('0 ')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel0')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel1')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel2')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel3')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel4')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel5')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel6')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel7');
            this.appendDummyInput()
                .appendField('1 ')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel8')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel9')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel10')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel11')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel12')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel13')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel14')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel15');
            this.appendDummyInput()
                .appendField('2 ')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel16')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel17')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel18')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel19')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel20')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel21')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel22')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel23');
            this.appendDummyInput()
                .appendField('3 ')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel24')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel25')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel26')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel27')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel28')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel29')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel30')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel31');
            this.appendDummyInput()
                .appendField('4 ')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel32')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel33')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel34')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel35')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel36')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel37')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel38')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel39');
            this.appendDummyInput()
                .appendField('5 ')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel40')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel41')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel42')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel43')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel44')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel45')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel46')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel47');
            this.appendDummyInput()
                .appendField('6 ')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel48')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel49')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel50')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel51')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel52')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel53')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel54')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel55');
            this.appendDummyInput()
                .appendField('7 ')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel56')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel57')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel58')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel59')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel60')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel61')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel62')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel63');
            this.setInputsInline(false);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#59646f');
            this.setTooltip('');
            this.setHelpUrl('https://playground.arduino.cc/Main/LEDMatrix/');
        },
    };

    Blocks['otto9_mouth'] = {
        init() {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage('blockly/media/matrix.png', 48, 48, '*'))
                .appendField(Blockly.Msg.OTTO9_MOUTH_TEXT)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOUTH_CHOICE), 'otto9_mouth_choice');
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#59646f');
            this.setTooltip(Blockly.Msg.OTTO9_MOUTH_TOOLTIP);
            this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
        },
    };

    Blocks['otto9_mouth#'] = {
        init() {
            this.appendDummyInput();
            this.appendValueInput('mouth').appendField(Blockly.Msg.OTTO9_MOUTH_TEXT);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#59646f');
            this.setTooltip(Blockly.Msg.OTTO9_MATRIX_TOOLTIP);
            this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
        },
    };

    Blocks['otto9_matrixp'] = {
        init() {
            this.appendDummyInput().appendField('pixel X');
            this.appendValueInput('X').setCheck('Number').appendField('Y');
            this.appendValueInput('Y').setCheck('Number');
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#59646f');
            this.setTooltip(Blockly.Msg.OTTO9_MATRIX_TOOLTIP);
            this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
        },
    };

    Blocks['otto9_matrix_text'] = {
        init() {
            this.appendDummyInput()
                .appendField(Blockly.Msg.OTTO9_MATRIXTEXT_TEXT);
            this.appendValueInput('input').setCheck('String');
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#59646f');
            this.setTooltip(Blockly.Msg.OTTO9_MATRIX_TOOLTIP);
            this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
        },
    };

    Blocks['otto9_matrix_brightness'] = {
        init() {
            this.appendDummyInput()
                .appendField(Blockly.Msg.MATRIX + ' intensity ');
            this.appendValueInput('brightness').setCheck('Number');
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#59646f');
            this.setTooltip(Blockly.Msg.matrice8x8_del_tooltip);
            this.setHelpUrl(Blockly.Msg.matrice8x8_helpurl);
        },
    };

    Blocks['otto9_clear'] = {
        init() {
            this.appendDummyInput()
                .appendField(Blockly.Msg.OTTO9_CLEAR_TEXT);
            this.setInputsInline(false);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#59646f');
            this.setTooltip(Blockly.Msg.OTTO9_CLEAR_TOOLTIP);
            this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
        },
    };

    Blocks['otto9_arms'] = {
        init() {
            this.appendDummyInput()
                .appendField(new Blockly.FieldImage('blockly/media/humanoid_arms.png', 48, 48, '*'))
                .appendField(Blockly.Msg.OTTO9_ARMS_TEXT)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_ARMS_CHOICE), 'otto9_arms_choice');
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#59646f');
            this.setTooltip(Blockly.Msg.OTTO9_ARMS_TOOLTIP);
            this.setHelpUrl(Blockly.Msg.OTTO9_HUMANOID_URL);
        },
    };
}
