export const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <small className="text-gray-500 mb-1">©{currentYear}</small>
    );

}