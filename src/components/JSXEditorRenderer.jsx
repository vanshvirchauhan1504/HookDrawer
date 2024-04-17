import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Editor from '@monaco-editor/react';
import {Parser} from 'acorn';
import jsx from 'acorn-jsx';

const JSXEditorRenderer = () => {
    // Define the initial code state
    const [code, setCode] = useState(`
        function App() {
            return (
                <div style={{ padding: '20px' }}>
                    <h1>Hello, world!</h1>
                    <p>This is a live JSX rendering example.</p>
                </div>
            );
        }
    `);

    const validateCode = (code) => {
        try {
            // Use Acorn to parse the code with the specified options
            Parser.extend(jsx()).parse(code, { ecmaVersion: 2021, sourceType: 'module' });
            // If parsing is successful, the code is valid
            return { isValid: true, errors: [] };
        } catch (error) {
            // If an error occurs, the code is invalid
            return { isValid: false, errors: [error.message] };
        }
    };
    
    const [isValid,setIsValid] = useState(true);

    const handleCodeChange = (newCode) => {

        console.log("Loading 1");

        const validationResult = validateCode(newCode);
        console.log(validationResult);

        console.log("Loading 2");

    
        if (validationResult.isValid) {
            // If the code is valid, update the state with the new code
            setCode(newCode);
            setIsValid(true);
        } 
        else {
            // If the code is invalid, handle the errors (e.g., display error messages)
            setIsValid(false);
            console.error('Validation errors:', validationResult.errors);
        }
    };
    

    // Define options for the Monaco Editor
    const editorOptions = {
        language: 'javascript',
        minimap: { enabled: false }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
            {/* JSX Editor */}
            <div style={{ flex: 1, padding: '10px' }}>
                <h2>JSX Editor</h2>
                <Editor
                    height="90%"
                    width="100%"
                    language="javascript"
                    value={code}
                    options={editorOptions}
                    onChange={handleCodeChange}
                />
            </div>

            {/* Live Renderer */}
            <div style={{ flex: 1, padding: '10px', borderLeft: '1px solid #ddd' }}>
                <h2>Live Preview</h2>
                {/* LiveProvider sets up the evaluation environment */}

                {isValid && (
                    <LiveProvider code={code}>
                        <LivePreview style={{ border: '1px solid #ccc', padding: '10px' }} />
                        <LiveError style={{ color: 'red' }} />
                    </LiveProvider>
                )}
                {/* <LiveProvider code={code}> */}
                    {/* LivePreview renders the JSX code */}
                    {/* <LivePreview 
                        style={{ border: '1px solid #ccc', padding: '10px' }} 
                        errorBoundary={
                            ({ error, errorInfo }) => {
                                console.error('Live Preview error:', error, errorInfo);
                                return <div style={{ color: 'red' }}>An error occurred while rendering the code.</div>;
                            }
                        }
                    /> */}
                    {/* LiveError displays any errors */}
                    {/* <LiveError style={{ color: 'red' }} /> */}
                {/* </LiveProvider> */}
            </div>
        </div>
    );
};

export default JSXEditorRenderer;
