import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import icon from '../Home/Di.png'

export default function App() {
    const steps = [
        {
            id: '0',
            message: 'Hey Geek! How can I help you today?',
            trigger: '1'
        },
        {
            id: '1',
            options: [
                { value: 'ask_name', label: 'Tell me how you make Report', trigger: 'askName' },
                { value: 'ask_info', label: 'Tell me how to check your report', trigger: 'askInfo' },
                { value: 'exit', label: 'Exit', trigger: 'endChat' }
            ]
        },
        {
            id: 'askName',
            message: 'Please provide details on what you want to report.',
            trigger: 'getName'
        },
        {
            id: 'getName',
            user: true,
            trigger: 'nameResponse'
        },
        {
            id: 'nameResponse',
            message: "Hi {previousValue}, here's how you can make a report: 1. Register 2. Login 3. Start a new report 4. Input your details 5. Submit",
            trigger: 'followUp'
        },
        {
            id: 'askInfo',
            message: 'What is the report you want to check?',
            trigger: 'getInfo'
        },
        {
            id: 'getInfo',
            user: true,
            trigger: 'infoResponse'
        },
        {
            id: 'infoResponse',
            message: "To check your report, follow these steps: 1. Login 2. Go to the Complaint menu 3. View your report",
            trigger: 'followUp'
        },
        {
            id: 'followUp',
            options: [
                { value: 'ask_another', label: 'Ask another question', trigger: '1' },
                { value: 'exit', label: 'Exit', trigger: 'endChat' }
            ]
        },
        {
            id: 'endChat',
            message: 'Goodbye! Have a great day!',
            end: true
        }
    ];

    const theme = {
        background: '#C9FF8F',
        headerBgColor: '#197B22',
        headerFontSize: '20px',
        botBubbleColor: '#0F3789',
        headerFontColor: 'white',
        botFontColor: 'white',
        userBubbleColor: '#FF5733',
        userFontColor: 'white',
    };

    const config = {
        botAvatar: icon,
        floating: true,
    };

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <ChatBot
                    headerTitle="Mirota Kampus"
                    steps={steps}
                    {...config}
                />
            </ThemeProvider>
        </div>
    );
}
