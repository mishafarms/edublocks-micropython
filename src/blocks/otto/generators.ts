export default function define(Python: Blockly.BlockGenerators) {
    Python['otto9_home'] = (block) => {
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['init_otto'] = 'Otto = otto9.Otto9()\n' +
            'Otto.init(33, 25, 26, 27, True, 34, 4, 2, 15)\n';
        return 'Otto.home()\n';
    };

    Python['otto9_calibrate'] = (block) => {
        const ll = block.getFieldValue('LL');
        const rl = block.getFieldValue('RL');
        const lf = block.getFieldValue('LF');
        const rf = block.getFieldValue('RF');
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['init_otto'] = 'Otto = otto9.Otto9()\n' +
            'Otto.init(33, 25, 26, 27, True, 34, 4, 2, 15)\n';
        return `Otto.setTrims(${ll}, ${rl}, ${lf}, ${rf})\n`;
    };

    Python['otto9_eeprom'] = (block) => {
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['init_otto'] = 'Otto = otto9.Otto9()\n' +
            'Otto.init(33, 25, 26, 27, True, 34, 4, 2, 15)\n';
        return 'Otto.saveTrimsOnEEPROM()\n';
    };

    Python['otto9_move'] = (block) => {
        var dropdown_otto_move_sens = block.getFieldValue('otto_move_sens');
        var dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['init_otto'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.init(33, 25, 26, 27, True, 34, 4, 2, 15)\n';
        var code = '';
        switch(dropdown_otto_move_sens) {
            case 'FORWARD':
                code = 'Otto.walk(1,' + dropdown_otto_move_speed + ',1) # FORWARD\n';
                break;
            case 'BACKWARD':
                code = 'Otto.walk(1,' + dropdown_otto_move_speed + ',-1) # BACKWARD\n';
                break;
            case 'LEFT':
                code = 'Otto.turn(1,' + dropdown_otto_move_speed + ',1) # LEFT\n';
                break;
            case 'RIGHT':
                code = 'Otto.turn(1,' + dropdown_otto_move_speed + ',-1) # RIGHT\n';
                break;
            case 'BENDLEFT':
                code = 'Otto.bend(1,' + dropdown_otto_move_speed + ',1)\n';
                break;
            case 'BENDRIGHT':
                code = 'Otto.bend(1,' + dropdown_otto_move_speed + ',-1)\n';
                break;
            case 'SHAKERIGHT':
                code = 'Otto.shakeLeg(1,' + dropdown_otto_move_speed + ',1)\n';
                break;
            case 'SHAKELEFT':
                code = 'Otto.shakeLeg(1,' + dropdown_otto_move_speed + ',-1)\n';
                break;
            case 'jump':
                code = 'Otto.jump(1,' + dropdown_otto_move_speed + ')\n';
                break;
        }
        return code;
    };

    Python['otto9_dance'] = (block) => {
        var dropdown_otto_dance_movement = block.getFieldValue('otto_dance_movement');
        var dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
        var dropdown_otto_dance_size = block.getFieldValue('otto_dance_size');
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['init_otto'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.init(33, 25, 26, 27, True, 34, 4, 2, 15)\n';

        var code = '';
        switch(dropdown_otto_dance_movement) {
            case 'moonwalkerLEFT':
                code = 'Otto.moonwalker(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', 1)\n';
                break;
            case 'moonwalkerRIGHT':
                code = 'Otto.moonwalker(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', -1)\n';
                break;
            case 'crusaitoLEFT':
                code = 'Otto.crusaito(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', 1)\n';
                break;
            case 'crusaitoRIGHT':
                code = 'Otto.crusaito(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', -1)\n';
                break;
            case 'flappingFRONT':
                code = 'Otto.flapping(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', 1)\n';
                break;
            case 'flappingBACK':
                code = 'Otto.flapping(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', -1)\n';
                break;
        }
        return code;
    };

    Python['otto9_do'] = (block) => {
        var dropdown_otto_do_movement = block.getFieldValue('otto_do_movement');
        var dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
        var dropdown_otto_dance_size = block.getFieldValue('otto_dance_size');
        Blockly.Python.definitions_['import_otto']='import otto9';
        Blockly.Python.definitions_['init_otto'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.init(33, 25, 26, 27, True, 34, 4, 2, 15)\n';
        var code = 'Otto.' + dropdown_otto_do_movement + '(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ')\n';
        return code;
    };

    Python['otto9_gesture'] = (block) => {
        var dropdown_otto_gesture = block.getFieldValue('otto_gesture');
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['import_gestures'] = 'import gestures';
        Blockly.Python.definitions_['init_otto'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.init(33, 25, 26, 27, True, 34, 4, 2, 15)\n';
        var code = 'Otto.playGesture(' + 'gestures.' + dropdown_otto_gesture.toUpperCase() + ')\n';
        return code;
    };

    Python['otto9_sound'] = (block) => {
        var dropdown_otto_sound = block.getFieldValue('otto_sound');
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['import_songs'] = 'import songs';
        Blockly.Python.definitions_['init_otto'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.init(33, 25, 26, 27, True, 34, 4, 2, 15)\n';
        var code = 'Otto.sing(songs.' + dropdown_otto_sound.toUpperCase().substring(2) + ')\n';
        return code;
    };

    Python['otto9_tone'] = (block) => {
        var dropdown_otto_note = block.getFieldValue('otto_note');
        var dropdown_otto_note_duration = block.getFieldValue('otto_note_duration');
        Blockly.Python.definitions_['import_otto']='import otto9';
        Blockly.Python.definitions_['init_otto'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.init(33, 25, 26, 27, True, 34, 4, 2, 15)\n';
        var code = "Otto._tone(" + dropdown_otto_note + ", " + dropdown_otto_note_duration + ", 1)\n";
        return code;
    };
}
