import Elipse16 from "./elipse16"
import Elipse17 from "./elipse17"
import Elipse18 from "./elipse18"

const Component20Derecha = () => {
    const estiloComponent20 = {
        width: '698px',
        height: '655px',
    };

    return (
        <div style={estiloComponent20}>
            <Elipse16 bottom={0} left={0} width={314} height={322} />
            <Elipse17 top={0} right={0} width={200} height={150} />
            <Elipse18 top={364} left={130} width={200} height={150} />
        </div>
    )
}

export default Component20Derecha