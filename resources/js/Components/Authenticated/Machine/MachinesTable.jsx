import React from 'react';
import Table from "@/Components/Table/Table";
import Button from "@/Components/Buttons/Button";
import {capitalize} from "lodash/string";

export default function MachinesTable({machines}){
    const rowClasses="[&>*]:py-4";
    const headerClasses="text-left";


    return(
        <Table>
            <Table.Row className={"text-slate-500 pb-2 pt-2 border-b border-t border-slate-100 "+rowClasses}>
                <Table.Header className={headerClasses}>N° macchina</Table.Header>
                <Table.Header className={headerClasses}>Matricola</Table.Header>
                <Table.Header className={headerClasses}>Nome</Table.Header>
                <Table.Header className={headerClasses}>Modello</Table.Header>
                <Table.Header className={headerClasses}>Locazione</Table.Header>
                <Table.Header className={headerClasses}>Inizio</Table.Header>
                <Table.Header className={headerClasses}>Fine</Table.Header>
            </Table.Row>

            {machines.map((machine)=>{
                return(
                    <Table.Row key={machine.id} className={"border-b border-slate-100 text-sm"+" "+rowClasses}>
                        <Table.Field>{machine.number}</Table.Field>
                        <Table.Field>{machine.code}</Table.Field>
                        <Table.Field>{machine.name}</Table.Field>
                        <Table.Field>{machine.model}</Table.Field>
                        <Table.Field>{machine.place.address_first_line} <br /> {machine.place.address_second_line}</Table.Field>
                        <Table.Field>{machine.start}</Table.Field>
                        <Table.Field>{machine.end}</Table.Field>
                    </Table.Row>
                )
            })}
        </Table>
    )
}
