import React from 'react';
import Table from "@/Components/Table/Table";
import {BsThreeDotsVertical} from "react-icons/all";
import ActionButton from "@/Components/Admin/Company/ActionButton";

export default function CompaniesTable({companies}){
    const fieldsWidth=["w-1/5","w-1/6","w-[10%]","w-1/12","w-1/12","w-[10%]","w-1/12","w-1/12"];
    const rowClasses="[&>*]:py-4";
    const headerClasses="text-left"

    function parseBoolean(value){
        return value?'Sì':'No'
    }

    return(
        <Table>
            <Table.Row className={"text-slate-500 pb-2 pt-2 border-b border-t border-slate-100 "+rowClasses}>
                <Table.Header className={headerClasses}>Nome</Table.Header>
                <Table.Header className={headerClasses}>Email</Table.Header>
                <Table.Header className={headerClasses}>P. Iva</Table.Header>
                <Table.Header className={headerClasses+" text-center"}>Supervisori</Table.Header>
                <Table.Header className={headerClasses+" text-center"}>Cespiti</Table.Header>
                <Table.Header className={headerClasses+" text-center"}>Configurazione</Table.Header>
                <Table.Header className={headerClasses}>Sotto scorta</Table.Header>
                <Table.Header className={headerClasses}>Scadenza</Table.Header>
                <Table.Header className={headerClasses}></Table.Header>
            </Table.Row>

            {companies.map((company)=>{

                return(
                    <Table.Row key={company.id} className={"border-b border-slate-100 text-sm"+" "+rowClasses}>
                        <Table.Field>{company.name}</Table.Field>
                        <Table.Field>{company.email}</Table.Field>
                        <Table.Field>{company.vat}</Table.Field>
                        <Table.Field className="text-center">{parseBoolean(company.supervision)}</Table.Field>
                        <Table.Field className="text-center">{parseBoolean(company.machines)}</Table.Field>
                        <Table.Field className="text-center">{parseBoolean(company.services)}</Table.Field>
                        <Table.Field>{company.under_escort_percentage_limit+" %"}</Table.Field>
                        <Table.Field>{company.expiring_limit + " giorni"}</Table.Field>
                        <Table.Field><ActionButton>
                            <ActionButton.Trigger><div><BsThreeDotsVertical></BsThreeDotsVertical></div></ActionButton.Trigger>
                            <ActionButton.Content>
                                <ActionButton.Link href={route('companies.show',company.id)} method="get">Dettagli</ActionButton.Link>
                                <ActionButton.Link href={route('companies.edit',company.id)} method="get">Modifica</ActionButton.Link>
                                <ActionButton.Link href={route('companies.destroy',company.id)} method="delete" className="bg-rose-600 hover:bg-rose-500 text-white">Elimina</ActionButton.Link>
                            </ActionButton.Content>
                        </ActionButton></Table.Field>
                    </Table.Row>
                )
            })}
        </Table>
    )
}




