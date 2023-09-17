import './App.css';
//import logo from '';
import { Button } from '@chakra-ui/react';

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
				<div className="chats">
					<img src="" alt="" />
					<p className="txt"></p>
				</div>
				<div className="chatFooter">
					<div className="inp">
						<input type="text" placeholder="Send a messgae" />
						<button className="send">
							<img src="" atl="Send" />
						</button>
					</div>
					<p>Chatgpt may do error</p>
				</div>
			</div>
		</div>
	);
}

export default App;
