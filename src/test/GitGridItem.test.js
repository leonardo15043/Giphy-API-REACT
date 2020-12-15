import { shallow } from "enzyme"
import { GitGridItem } from "../components/GitGridItem"

describe('Pruebas en GitGridItem', () => {

    const image = { 
        id: 12,
        title: 'Bored One',
        url : 'https://media4.giphy.com/media/6IkjQmpaRwIabJ2G3C/giphy-downsized-medium.gif?cid=cd622c90mqvu6s36rmyko0ies0n0xgn9t26d0wqtlmkvdpzw&rid=giphy-downsized-medium.gif'
    }


    const wrapper = shallow(<GitGridItem { ...image } />);

    test('Cargar correctamente el componente', () => {

        expect( wrapper ).toMatchSnapshot();
        
    })  

    test('Validar que el parrafo tenga el titulo que le enviamos como parametro ', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( image.title );

    })

    test('debe tener la clase animate__fadeInLeft', () => {
        
        const div = wrapper.find('div');
        expect(div.exists('.animate__fadeInLeft')).toBe( true );
        
    })
    
    
}) 
