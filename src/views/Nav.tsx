import React = require('preact');
import {Component} from 'preact';

interface NavProps {
    onFunction(): void;

    onDownloadPython(): void;

    onNew(): void;

    onOpen(): void;

    onSave(): void;

    onRun(): void;

    onTerminal(): void;

    onSelectFile(file: File): void;
}

export default function Nav(props: NavProps) {
    function onFileSelected(target: any) {
        props.onSelectFile(target.files[0]);
    }

    return (
        <nav class="Nav">
            <a class="brand">
                <img class="logo" src="images/logo.png"/>
            </a>
            <a class="brand">
                <img class="logo" src="images/logo_built_on_knockout.png"/>
            </a>

            <div class="menu">
                <label class="button" for="myfile">Upload a file:</label>
                <input type="file" value="" id="myfile" class="file" onChange={(e) => onFileSelected(e.target)}/>

                {/* <a class="button" title="Download Python Source Code" href="javascript:void(0)" onClick={() => props.onDownloadPython()}>
                    Python Download
                    </a> */}

                <a class="button" title="Functions" href="javascript:void(0)" onClick={() => props.onFunction()}>
                    Functions
                </a>

                <a class="button icon-plus" title="New" href="javascript:void(0)" onClick={() => props.onNew()}>
                    New
                </a>

                <a class="button icon-folder-open" title="Open a file" href="javascript:void(0)"
                   onClick={() => props.onOpen()}>
                    Open
                </a>

                <a class="button icon-floppy" title="Save a file" href="javascript:void(0)"
                   onClick={() => props.onSave()}>
                    Save
                </a>

                <a class="button icon-play" title="Run your code" href="javascript:void(0)"
                   onClick={() => props.onRun()}>
                    Run
                </a>

                <a class="button icon-desktop" title="Terminal" href="javascript:void(0)"
                   onClick={() => props.onTerminal()}>
                    WebREPL {'>>>'}
                </a>
            </div>
        </nav>
    );
}
