export default function define(Python: Blockly.BlockGenerators) {
    Python['otto9_home'] = (block) => {
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['init_otto'] = 'Otto = otto9.Otto9()\n' +
            'Otto.init(33, 25, 26, 27, True, 34, 4, 2, 15)\n';
        return 'Otto.home()\n';
    };

    Python['otto9_calibration'] = (block) => {
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
        return 'Otto.saveTrimsOnEEPROM()\n';
    };

    Python['otto9_move'] = (block) => {
        const dropdown_otto_move_sens = block.getFieldValue('otto_move_sens');
        const dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['init_otto'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.init(33, 25, 26, 27, True, 34, 4, 2, 15)\n';
        let code = '';
        switch (dropdown_otto_move_sens) {
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
        const dropdown_otto_dance_movement = block.getFieldValue('otto_dance_movement');
        const dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
        const dropdown_otto_dance_size = block.getFieldValue('otto_dance_size');
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['init_otto'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.init(33, 25, 26, 27, True, 34, 4, 2, 15)\n';

        let code = '';
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
        const dropdown_otto_do_movement = block.getFieldValue('otto_do_movement');
        const dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
        const dropdown_otto_dance_size = block.getFieldValue('otto_dance_size');
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['init_otto'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.init(33, 25, 26, 27, True, 34, 4, 2, 15)\n';
        let code = 'Otto.' + dropdown_otto_do_movement + '(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ')\n';
        return code;
    };

    Python['otto9_gesture'] = (block) => {
        const dropdown_otto_gesture = block.getFieldValue('otto_gesture');
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['import_gestures'] = 'import gestures';
        Blockly.Python.definitions_['init_otto'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.init(33, 25, 26, 27, True, 34, 4, 2, 15)\n';
        let code = 'Otto.playGesture(' + 'gestures.' + dropdown_otto_gesture.toUpperCase() + ')\n';
        return code;
    };

    Python['otto9_sound'] = (block) => {
        const dropdown_otto_sound = block.getFieldValue('otto_sound');
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['import_songs'] = 'import songs';
        Blockly.Python.definitions_['init_otto'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.init(33, 25, 26, 27, True, 34, 4, 2, 15)\n';
        let code = 'Otto.sing(songs.' + dropdown_otto_sound.toUpperCase().substring(2) + ')\n';
        return code;
    };

    Python['otto9_tone'] = (block) => {
        const dropdown_otto_note = block.getFieldValue('otto_note');
        const dropdown_otto_note_duration = block.getFieldValue('otto_note_duration');
        Blockly.Python.definitions_['import_otto']='import otto9';
        Blockly.Python.definitions_['init_otto'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.init(33, 25, 26, 27, True, 34, 4, 2, 15)\n';
        let code = "Otto._tone(" + dropdown_otto_note + ", " + dropdown_otto_note_duration + ", 1)\n";
        return code;
    };

    Python['otto9_getnoise'] = (block) => {
        const noisename = block.getFieldValue('noise_name');
        let code = `${noisename} = Otto.getNoise()`;
        return code;
    };

    Python['otto9_touchbutton'] = (block) => {
        const touchname = block.getFieldValue('touch_name');
        Blockly.Python.definitions_['touch_pin'] = 'touch1 = TouchPad(Pin(14))'
        let code = `${touchname} = touch1.read()`;
        return code;
    };

    Python['otto9_homeh'] = (block) => {
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['otto_init'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.initHUMANOID(23, 22, 33, 25, 26, 27, True, 35, 4, 2, 15)\n';
        return 'Otto.home()\n';
    };

    Python['otto9_calibrationh'] = (block) => {
        const ll = block.getFieldValue('LL');
        const rl = block.getFieldValue('RL');
        const lf = block.getFieldValue('LF');
        const rf = block.getFieldValue('RF');
        const la = block.getFieldValue('LA');
        const ra = block.getFieldValue('RA');
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['otto_init'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.initHUMANOID(23, 22, 33, 25, 26, 27, True, 35, 4, 2, 15)\n';
        return `Otto.setTrims(${ll}, ${rl}, ${lf}, ${rf}, ${la}, ${ra})\n`;
    };

    Python['otto9_moveh'] = (block) => {
        const dropdown_otto_move_sens = block.getFieldValue('otto_move_sens');
        const dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['otto_init'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.initHUMANOID(23, 22, 33, 25, 26, 27, True, 35, 4, 2, 15)\n';
        let code = '';
        switch (dropdown_otto_move_sens) {
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

    Python['otto9_danceh'] = (block) => {
        const dropdown_otto_dance_movement = block.getFieldValue('otto_dance_movement');
        const dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
        const dropdown_otto_dance_size = block.getFieldValue('otto_dance_size');
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['otto_init'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.initHUMANOID(23, 22, 33, 25, 26, 27, True, 35, 4, 2, 15)\n';

        let code = '';
        switch (dropdown_otto_dance_movement) {
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

    Python['otto9_doh'] = (block) => {
        const dropdown_otto_do_movement = block.getFieldValue('otto_do_movement');
        const dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
        const dropdown_otto_dance_size = block.getFieldValue('otto_dance_size');
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['otto_init'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.initHUMANOID(23, 22, 33, 25, 26, 27, True, 35, 4, 2, 15)\n';
        return 'Otto.' + dropdown_otto_do_movement + '(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ')\n';
    };

    Python['otto9_gestureh'] = (block) => {
        const dropdown_otto_gesture = block.getFieldValue('otto_gesture');
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['import_gestures'] = 'import gestures';
        Blockly.Python.definitions_['otto_init'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.initHUMANOID(23, 22, 33, 25, 26, 27, True, 35, 4, 2, 15)\n';
        return 'Otto.playGesture(' + 'gestures.' + dropdown_otto_gesture.toUpperCase() + ')\n';
    };

    Python['otto9_soundh'] = (block) => {
        const dropdown_otto_sound = block.getFieldValue('otto_sound');
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['import_songs'] = 'import songs';
        Blockly.Python.definitions_['otto_init'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.initHUMANOID(23, 22, 33, 25, 26, 27, True, 35, 4, 2, 15)\n';
        return 'Otto.sing(songs.' + dropdown_otto_sound.toUpperCase().substring(2) + ')\n';
    };

    Python['otto9_toneh'] = (block) => {
        const dropdown_otto_note = block.getFieldValue('otto_note');
        const dropdown_otto_note_duration = block.getFieldValue('otto_note_duration');
        Blockly.Python.definitions_['import_otto']='import otto9';
        Blockly.Python.definitions_['otto_init'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.initHUMANOID(23, 22, 33, 25, 26, 27, True, 35, 4, 2, 15)\n';
        return `Otto._tone(${dropdown_otto_note}, ${dropdown_otto_note_duration}, 1)\n`;

    };

    Python['otto9_matrix'] = (block) => {
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['otto_init'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.initHUMANOID(23, 22, 33, 25, 26, 27, True, 35, 4, 2, 15)\n';
        Blockly.Python.definitions_['ledmatrix_init'] = 'Otto.initMatrix(19, 5, 18, 1)\n';
        let matrix = '0b';
        for (let i = 0; i < 30; i++) {
            if (block.getFieldValue('otto9_matrix_pixel' + i) === 'TRUE') {
                matrix += '1';
            } else {
                matrix += '0';
            }
        }
        return `Otto.putMouth(${matrix}, false)\n`;

    };

    Python['otto9_matrix8x8'] = (block) => {
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['otto_init'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.initHUMANOID(23, 22, 33, 25, 26, 27, True, 35, 4, 2, 15)\n';
        Blockly.Python.definitions_['ledmatrix_init'] = 'Otto.initMatrix(19, 5, 18, 1)\n';
        let code = '';
        for (let i = 0; i < 64; i++) {

            let ledon = 0;

            if (block.getFieldValue('Pixel' + i) === 'TRUE') {
                ledon = 1;
            }

            const row = Math.floor(i / 8);
            const col = i % 8;
            code += `Otto.setLed(${row}, ${col}, ${ledon})\n`;
        }
        return code;
    };

    Python['otto9_mouth'] = (block) => {
        const dropdown_otto9_mouth_choice = block.getFieldValue('otto9_mouth_choice');
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['import_mouths'] = 'import mouths';
        Blockly.Python.definitions_['otto_init'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.initHUMANOID(23, 22, 33, 25, 26, 27, True, 35, 4, 2, 15)\n';
        Blockly.Python.definitions_['ledmatrix_init'] = 'Otto.initMatrix(19, 5, 18, 1)\n';
        let code = 'Otto.putMouth(mouths.' + dropdown_otto9_mouth_choice.toUpperCase() + ')\n';
        return code;
    };

    Python['otto9_mouth#'] = (block) => {
        const valuemouth = block.getFieldValue('mouth');
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['otto_init'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.initHUMANOID(23, 22, 33, 25, 26, 27, True, 35, 4, 2, 15)\n';
        Blockly.Python.definitions_['ledmatrix_init'] = 'Otto.initMatrix(19, 5, 18, 1)\n';
        return 'Otto.clearMouth()\n'
            + `Otto.writeText(str(${valuemouth}), 50) # show the data with a fast scroll\n`
            + 'delay(50)\n';
    };

    Python['otto9_mouthv'] = (block) => {
        const valuemouth = block.getFieldValue('value');
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['otto_init'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.initHUMANOID(23, 22, 33, 25, 26, 27, True, 35, 4, 2, 15)\n';
        Blockly.Python.definitions_['ledmatrix_init'] = 'Otto.initMatrix(19, 5, 18, 1)\n';
        return 'Otto.clearMouth()\n'
            + `Otto.writeText(str(${valuemouth}), 50) # show the data with a fast scroll\n`
            + 'delay(50)\n';
    };

    Python['otto9_matrixp'] = (block) => {
        const valuex = block.getFieldValue('X');
        const valuey = block.getFieldValue('Y');
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['otto_init'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.initHUMANOID(23, 22, 33, 25, 26, 27, True, 35, 4, 2, 15)\n';
        Blockly.Python.definitions_['ledmatrix_init'] = 'Otto.initMatrix(19, 5, 18, 1)\n';
        return 'Otto.setLed(' + valuex + ',' + valuey + ',1)\n';
    };

    Python['otto9_matrix_text'] = (block) => {
        const text_input = block.getFieldValue('input');
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['otto_init'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.initHUMANOID(23, 22, 33, 25, 26, 27, True, 35, 4, 2, 15)\n';
        Blockly.Python.definitions_['ledmatrix_init'] = 'Otto.initMatrix(19, 5, 18, 1)\n';
        return 'Otto.clearMouth()\n'
            + `Otto.writeText("${text_input}", 100) # limited to CAPITAL LETTERS NUMBERS : ; < >  = @, MAX.9 characters \n`;
    };

    Python['otto9_matrix_brightness'] = (block) => {
        const brightness = block.getFieldValue('brightness');
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['otto_init'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.initHUMANOID(23, 22, 33, 25, 26, 27, True, 35, 4, 2, 15)\n';
        Blockly.Python.definitions_['ledmatrix_init'] = 'Otto.initMatrix(19, 5, 18, 1)\n';
        return `Otto.matrixIntensity(${brightness}) #the brightness of the display. (0 to 15)\n`;
    };

    Python['otto9_clear'] = (block) => {
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['import_mouths'] = 'import mouths';
        Blockly.Python.definitions_['otto_init'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.initHUMANOID(23, 22, 33, 25, 26, 27, True, 35, 4, 2, 15)\n';
        Blockly.Python.definitions_['ledmatrix_init'] = 'Otto.initMatrix(19, 5, 18, 1)\n';
        return 'Otto.clearMouth()\n';
    };

    Python['otto9_arms'] = (block) => {
        const dropdown_otto9_arms_choice = block.getFieldValue('otto9_arms_choice');
        Blockly.Python.definitions_['import_otto'] = 'import otto9';
        Blockly.Python.definitions_['otto_init'] = 'Otto = otto9.Otto9()\n'
            + 'Otto.initHUMANOID(23, 22, 33, 25, 26, 27, True, 35, 4, 2, 15)\n';
        let code = 'Otto.';
        switch (dropdown_otto9_arms_choice) {
            case 'HANDSUP':
                code += 'handsup()\n';
                break;
            case 'HANDWAVE1':
                code += 'handwave(1)\n';
                break;
            case 'HANDWAVE2':
                code += 'handwave(-1)\n';
                break;
        }
        return code;
    };
}
