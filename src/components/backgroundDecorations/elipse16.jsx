const Elipse16 = () => {
    const estiloElipse16 = ({ top, bottom, left, right, width, height }) => {
        const estilo = {
            position: 'absolute',
            top: `${top}px`,
            bottom: `${bottom}px`,
            left: `${left}px`,
            right: `${right}px`,
            width: `${width}px`,
            height: `${height}px`,
            borderRadius: '50%',
            // Otros estilos necesarios
        };
        return (
            <div style={estiloElipse16}>        </div>
        )
    }
}
    export default Elipse16