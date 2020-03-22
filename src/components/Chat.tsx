import React from 'react';
import CardModel from '../models/Card';

type ChatProps = {
    style?: any
};

function Chat(props: ChatProps) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            ...props.style
        }}>
            <div style={{
                alignSelf: 'flex-end'
                }}>
                <input type="button" value="Expand/Collapse" />
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1
            }}>
                <textarea style={{
                    resize: 'none',
                    flexGrow: 1
                }} readOnly>
                    CHAT FROM THE USERS
            </textarea>
                <div style={{
                    display: 'flex',
                    height: '30%'
                }}>
                    <textarea style={{
                        resize: 'none',
                        width: '100%'
                    }} />
                    <input type="button" value=">" />
                </div>
            </div>
        </div>
    );
}

export default Chat;
