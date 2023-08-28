const Elipse18 = () => {
    const estiloElipse18 = ({ top, left, width, height }) => {
        const estilo = {
            position: 'absolute',
            top: `${top}px`,
            left: `${left}px`,
            width: `${width}px`,
            height: `${height}px`,
            borderRadius: '50%',
            // Otros estilos necesarios
        };
        return (
            <div style={estiloElipse18}>        </div>
        )
    }
}
    export default Elipse18