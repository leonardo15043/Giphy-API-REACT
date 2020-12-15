import { shallow } from "enzyme"
import { GitGridItem } from "../components/GitGridItem"

describe('Pruebas en GitGridItem', () => {
    test('Cargar correctamente el componente', () => {

        const image = { 
            id: 12,
            title: 'Bored One',
            url : 'https://media4.giphy.com/media/6IkjQmpaRwIabJ2G3C/giphy-downsized-medium.gif?cid=cd622c90mqvu6s36rmyko0ies0n0xgn9t26d0wqtlmkvdpzw&rid=giphy-downsized-medium.gif'
        }

        const wapper = shallow(<GitGridItem { ...image } />);

        expect( wapper ).toMatchSnapshot();
        
    })  
})
