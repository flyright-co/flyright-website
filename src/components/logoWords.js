import React from 'react'
import styled from 'styled-components'
import media from '../utils/media.js'

const LogoWords = () => (
	<Svg
		viewBox="0 0 79 23"
		xmlns="http://www.w3.org/2000/svg"
		aria-labelledby="logoWords"
	>
		<title id="logoWords">Flyright Logo Words</title>
		<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g transform="translate(-302.000000, -30.000000)" fill="#6E31EC">
				<g>
					<g transform="translate(243.000000, 15.000000)">
						<path d="M66.4314413,20.2056583 C66.7001502,20.2056583 66.8345026,20.3391354 66.8345026,20.6060936 L66.8345026,22.383025 C66.8345026,22.6499832 66.7001502,22.7834603 66.4314413,22.7834603 L64.0634566,22.7834603 C63.9626908,22.7834603 63.9123087,22.8335142 63.9123087,22.9336235 L63.9123087,32.6191513 C63.9123087,32.8861094 63.7779563,33.0195865 63.5092474,33.0195865 L61.393176,33.0195865 C61.1244672,33.0195865 60.9901148,32.8861094 60.9901148,32.6191513 L60.9901148,22.9336235 C60.9901148,22.8335142 60.9397326,22.7834603 60.8389668,22.7834603 L59.4030612,22.7834603 C59.1343524,22.7834603 59,22.6499832 59,22.383025 L59,20.6060936 C59,20.3391354 59.1343524,20.2056583 59.4030612,20.2056583 L60.8389668,20.2056583 C60.9397326,20.2056583 60.9901148,20.1556044 60.9901148,20.0554951 L60.9901148,19.6300326 C60.9901148,18.5455151 61.1328642,17.7071121 61.4183673,17.1147987 C61.7038705,16.5224853 62.1741039,16.1011982 62.8290816,15.8509249 C63.4840594,15.6006516 64.4077321,15.4838592 65.6001276,15.5005441 L66.3810587,15.5005441 C66.6497675,15.5005441 66.7841199,15.6340212 66.7841199,15.9009793 L66.7841199,17.4526659 C66.7841199,17.7196241 66.6497675,17.8531012 66.3810587,17.8531012 L65.8268495,17.8531012 C65.1046945,17.8531012 64.6050715,17.9949206 64.3279656,18.2785637 C64.0508596,18.5622067 63.9123087,19.0794304 63.9123087,19.8302503 L63.9123087,20.0554951 C63.9123087,20.1556044 63.9626908,20.2056583 64.0634566,20.2056583 L66.4314413,20.2056583 Z M69.7315051,33.0195865 C69.4627963,33.0195865 69.3284439,32.8861094 69.3284439,32.6191513 L69.3284439,15.9009793 C69.3284439,15.6340212 69.4627963,15.5005441 69.7315051,15.5005441 L71.8475765,15.5005441 C72.1162854,15.5005441 72.2506378,15.6340212 72.2506378,15.9009793 L72.2506378,32.6191513 C72.2506378,32.8861094 72.1162854,33.0195865 71.8475765,33.0195865 L69.7315051,33.0195865 Z M75.1728316,38 C75.0552715,38 74.9964923,37.8665229 74.9964923,37.5995647 L74.9964923,35.9978237 C74.9964923,35.7308655 75.0552715,35.5973885 75.1728316,35.5973885 L75.3239796,35.5973885 C76.012546,35.5973885 76.5499556,35.5348211 76.9362245,35.4096844 C77.3224934,35.2845478 77.6373819,35.0467917 77.8808992,34.6964091 C78.1244166,34.3460265 78.3469378,33.8204605 78.5484694,33.1196953 C78.582058,33.0362709 78.582058,32.9695324 78.5484694,32.9194777 L74.4422832,20.6811752 C74.4254889,20.6311205 74.4170918,20.5727243 74.4170918,20.5059848 C74.4170918,20.322451 74.5346502,20.2306855 74.7697704,20.2306855 L77.0369898,20.2306855 C77.27211,20.2306855 77.4232565,20.3391357 77.4904337,20.5560392 L79.9591837,28.8400435 C79.9927723,28.9067831 80.0305589,28.9401523 80.0725446,28.9401523 C80.1145304,28.9401523 80.14392,28.9067831 80.1607143,28.8400435 L82.5538903,20.5560392 C82.6210675,20.3391357 82.772214,20.2306855 83.0073342,20.2306855 L85.2745536,20.2306855 C85.4257023,20.2306855 85.5306651,20.268226 85.5894452,20.3433079 C85.6482252,20.4183899 85.6524237,20.5310112 85.6020408,20.6811752 L81.1935587,33.7203482 C80.7737011,34.9049751 80.3622469,35.7892608 79.9591837,36.3732318 C79.5561204,36.9572028 79.0061153,37.3743187 78.3091518,37.6245919 C77.6121883,37.8748652 76.6255378,38 75.3491709,38 L75.1728316,38 Z M93.7388393,20.0805223 C94.225874,20.0805223 94.6709164,20.1722878 95.0739796,20.3558215 C95.2755112,20.4559309 95.3510844,20.6227772 95.3007015,20.8563656 L94.8976403,22.9336235 C94.880846,23.0671026 94.8346624,23.1505258 94.759088,23.1838955 C94.6835137,23.2172653 94.5701538,23.2172653 94.4190051,23.1838955 C94.2174735,23.117156 93.9487687,23.0837867 93.6128827,23.0837867 C93.411351,23.0837867 93.2518076,23.092129 93.1342474,23.1088139 C92.4288868,23.1421837 91.841095,23.3882821 91.3708546,23.8471164 C90.9006141,24.3059508 90.6654974,24.9024265 90.6654974,25.6365615 L90.6654974,32.6191513 C90.6654974,32.8861094 90.5311451,33.0195865 90.2624362,33.0195865 L88.1463648,33.0195865 C87.877656,33.0195865 87.7433036,32.8861094 87.7433036,32.6191513 L87.7433036,20.6311208 C87.7433036,20.3641626 87.877656,20.2306855 88.1463648,20.2306855 L90.2624362,20.2306855 C90.5311451,20.2306855 90.6654974,20.3641626 90.6654974,20.6311208 L90.6654974,21.6071817 C90.6654974,21.6739213 90.6822915,21.7156329 90.7158801,21.7323177 C90.7494687,21.7490026 90.7830568,21.7239757 90.8166454,21.6572361 C91.5220061,20.6060883 92.496061,20.0805223 93.7388393,20.0805223 Z M98.8778699,18.6289445 C98.3236579,18.6289445 97.8702186,18.457927 97.5175383,18.1158868 C97.1648579,17.7738467 96.9885204,17.335875 96.9885204,16.8019587 C96.9885204,16.2680423 97.1648579,15.8342418 97.5175383,15.5005441 C97.8702186,15.1668464 98.3236579,15 98.8778699,15 C99.4320819,15 99.8813227,15.1668464 100.225606,15.5005441 C100.569889,15.8342418 100.742028,16.2680423 100.742028,16.8019587 C100.742028,17.335875 100.569889,17.7738467 100.225606,18.1158868 C99.8813227,18.457927 99.4320819,18.6289445 98.8778699,18.6289445 Z M97.8198342,33.0195865 C97.5511254,33.0195865 97.416773,32.8861094 97.416773,32.6191513 L97.416773,20.6311208 C97.416773,20.3641626 97.5511254,20.2306855 97.8198342,20.2306855 L99.9359056,20.2306855 C100.204614,20.2306855 100.338967,20.3641626 100.338967,20.6311208 L100.338967,32.6191513 C100.338967,32.8861094 100.204614,33.0195865 99.9359056,33.0195865 L97.8198342,33.0195865 Z M111.523916,20.6311208 C111.523916,20.3641626 111.658268,20.2306855 111.926977,20.2306855 L114.043048,20.2306855 C114.311757,20.2306855 114.44611,20.3641626 114.44611,20.6311208 L114.44611,32.1686616 C114.44611,34.2542723 113.841524,35.7475472 112.632334,36.648531 C111.423144,37.5495148 109.844504,38 107.896365,38 C107.426124,38 106.947494,37.974973 106.460459,37.9249184 C106.225339,37.9082335 106.107781,37.7580718 106.107781,37.4744287 L106.183355,35.6224157 C106.183355,35.5056215 106.22534,35.413856 106.309311,35.3471164 C106.393283,35.2803769 106.502444,35.2553499 106.636798,35.2720348 C107.207805,35.3054046 107.602465,35.3220892 107.820791,35.3220892 C109.097158,35.3220892 110.033426,35.0759909 110.629624,34.5837867 C111.225821,34.0915826 111.523916,33.261522 111.523916,32.09358 L111.523916,31.9434168 C111.523916,31.8766772 111.507122,31.8349656 111.473533,31.8182807 C111.439945,31.8015959 111.397959,31.8182805 111.347577,31.8683351 C110.65901,32.5857852 109.693352,32.9445049 108.450574,32.9445049 C107.358944,32.9445049 106.359698,32.6692084 105.452806,32.1186072 C104.545914,31.568006 103.916137,30.7254319 103.563457,29.5908596 C103.345131,28.80667 103.235969,27.7972496 103.235969,26.562568 C103.235969,25.1777225 103.370322,24.1182481 103.639031,23.3841132 C103.974917,22.3663351 104.554311,21.5529592 105.377232,20.9439608 C106.200153,20.3349625 107.165811,20.0304679 108.274235,20.0304679 C109.567396,20.0304679 110.591833,20.4058722 111.347577,21.1566921 C111.397959,21.2067467 111.439945,21.2234313 111.473533,21.2067465 C111.507122,21.1900616 111.523916,21.14835 111.523916,21.0816104 L111.523916,20.6311208 Z M111.347577,28.7649619 C111.414754,28.5146886 111.460937,28.2435633 111.486129,27.9515778 C111.51132,27.6595923 111.523916,27.1882513 111.523916,26.5375408 C111.523916,25.9035151 111.51132,25.4488588 111.486129,25.1735582 C111.460937,24.8982576 111.406357,24.6271323 111.322385,24.3601741 C111.188031,23.8095729 110.915127,23.36743 110.503667,23.0337323 C110.092207,22.7000346 109.567393,22.5331882 108.929209,22.5331882 C108.324614,22.5331882 107.812396,22.7000346 107.392538,23.0337323 C106.972681,23.36743 106.670388,23.8095729 106.485651,24.3601741 C106.284119,24.8273509 106.183355,25.5614749 106.183355,26.562568 C106.183355,27.5970309 106.267325,28.3228126 106.435268,28.7399347 C106.603211,29.2738511 106.909702,29.7118227 107.354751,30.0538629 C107.7998,30.3959031 108.333011,30.5669206 108.954401,30.5669206 C109.609378,30.5669206 110.138391,30.4000742 110.541454,30.0663765 C110.944517,29.7326788 111.213222,29.2988783 111.347577,28.7649619 Z M123.640944,20.0304679 C125.018077,20.0304679 126.113888,20.4308992 126.928412,21.2317737 C127.742936,22.0326482 128.150191,23.1254918 128.150191,24.5103373 L128.150191,32.6191513 C128.150191,32.8861094 128.015839,33.0195865 127.74713,33.0195865 L125.631059,33.0195865 C125.36235,33.0195865 125.227997,32.8861094 125.227997,32.6191513 L125.227997,25.1109902 C125.227997,24.3434855 125.005476,23.7219828 124.560427,23.2464635 C124.115378,22.7709443 123.531785,22.5331882 122.80963,22.5331882 C122.087475,22.5331882 121.503882,22.7667731 121.058833,23.2339499 C120.613784,23.7011267 120.391263,24.3184583 120.391263,25.085963 L120.391263,32.6191513 C120.391263,32.8861094 120.25691,33.0195865 119.988202,33.0195865 L117.87213,33.0195865 C117.603421,33.0195865 117.469069,32.8861094 117.469069,32.6191513 L117.469069,15.9009793 C117.469069,15.6340212 117.603421,15.5005441 117.87213,15.5005441 L119.988202,15.5005441 C120.25691,15.5005441 120.391263,15.6340212 120.391263,15.9009793 L120.391263,21.3068553 C120.391263,21.3735948 120.408057,21.4153064 120.441645,21.4319913 C120.475234,21.4486762 120.508822,21.4319915 120.542411,21.3819369 C121.247771,20.4809531 122.280605,20.0304679 123.640944,20.0304679 Z M138,22.1828074 C138,22.4497656 137.865648,22.5832427 137.596939,22.5832427 L135.15338,22.5832427 C135.052614,22.5832427 135.002232,22.6332966 135.002232,22.7334059 L135.002232,28.6398259 C135.002232,29.2905364 135.140783,29.7577062 135.417889,30.0413493 C135.694995,30.3249924 136.135839,30.4668118 136.740434,30.4668118 L137.395408,30.4668118 C137.664117,30.4668118 137.798469,30.6002888 137.798469,30.867247 L137.798469,32.5440696 C137.798469,32.8110278 137.664117,32.9528472 137.395408,32.9695321 L136.186224,32.9945593 C134.859475,32.9945593 133.868626,32.7651456 133.213648,32.3063112 C132.55867,31.8474768 132.222789,30.9923893 132.205995,29.7410229 L132.205995,22.7334059 C132.205995,22.6332966 132.155613,22.5832427 132.054847,22.5832427 L130.744898,22.5832427 C130.476189,22.5832427 130.341837,22.4497656 130.341837,22.1828074 L130.341837,20.6311208 C130.341837,20.3641626 130.476189,20.2306855 130.744898,20.2306855 L132.054847,20.2306855 C132.155613,20.2306855 132.205995,20.1806316 132.205995,20.0805223 L132.205995,17.2774755 C132.205995,17.0105173 132.340347,16.8770403 132.609056,16.8770403 L134.599171,16.8770403 C134.86788,16.8770403 135.002232,17.0105173 135.002232,17.2774755 L135.002232,20.0805223 C135.002232,20.1806316 135.052614,20.2306855 135.15338,20.2306855 L137.596939,20.2306855 C137.865648,20.2306855 138,20.3641626 138,20.6311208 L138,22.1828074 Z" />
					</g>
				</g>
			</g>
		</g>
	</Svg>
)

const Svg = styled.svg`
	display: none;
	${media.tab`
		display: block;
		width: 79px;
		height: 23px;
		margin: 0.25em 0 0 0.1em;
	`}
`

export default LogoWords
