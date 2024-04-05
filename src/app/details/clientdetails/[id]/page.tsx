import ButtonAction from "@/app/components/buttonAction";

const ClientDetailsPage = () => {
    return ( 
        <div className="items-center ">
            <div className="mb-8 text-center">
                <h2>Cliente 1</h2>
            </div>
            <div className="content">
                <ButtonAction />
                {/*INFOS*/}
                <p>email</p>
                <p>telefone</p>
                <p>celular</p>
                <p>cpf</p>
                <p>origem</p>
            </div>
        </div>
     );
}
 
export default ClientDetailsPage;