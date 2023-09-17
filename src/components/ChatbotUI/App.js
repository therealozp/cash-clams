import './App.css';
//import logo from '';
import { Button } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

function App() {
	return (
		<div className="App">
			<div className="sidebar">
				<div className="upperSide">
					<div className="upperSideTop">
						<img src="" alt="" className="logo" />
						<span className="brand">Chatgpt</span>
					</div>
					<Button ml="10px" mb="10px" className="midBtn">
						<img src="" alt="" className="addBtn" />
						New Chat
					</Button>
					<div className="upperSideBottom">
						<Button ml="10px" className="query">
							<img src="" alt="" />
							What is Finance?
						</Button>
					</div>
					<div className="lowerSide"></div>
				</div>
			</div>
			<div className="main"></div>
			<div className="chats">
				<div className="chat">
					<img src="" alt="User" />
					<Text fontSize="10px" color="black">
						Human
					</Text>
				</div>
				<div className="chat">
					<img src="" alt="Ai" />
					<Text fontSize="10px" color="black">
						Ai
					</Text>
				</div>
				<div className="chatFooter">
					<div className="inp">
						<input type="text" placeholder="Send a messgae" />
						<Button className="send">
							<img src="" atl="Send" />
						</Button>
					</div>
					<p>Chatgpt may do error</p>
				</div>
			</div>
		</div>
	);
}

export default App;
