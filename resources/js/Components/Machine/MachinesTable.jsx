import React from 'react';
import Table from "@/Components/Table/Table";
import Button from "@/Components/Buttons/Button";
import {capitalize} from "lodash/string";

export default function MachinesTable({machines}){
    const fieldsWidth=["w-[12%]","w-[12%]","w-1/6","w-[12%]","w-1/3","w-1/12","w-1/12"];
    const rowClasses="pt-4 pb-4";


    return(
        <Table>
            <Table.Row className={"text-slate-500 pb-2 pt-2 border-b border-t border-slate-100"}>
                <Table.Field className={fieldsWidth[0]}>N° macchina</Table.Field>
                <Table.Field className={fieldsWidth[1]}>Matricola</Table.Field>
                <Table.Field className={fieldsWidth[2]}>Nome</Table.Field>
                <Table.Field className={fieldsWidth[3]}>Modello</Table.Field>
                <Table.Field className={fieldsWidth[4]}>Locazione</Table.Field>
                <Table.Field className={fieldsWidth[5]}>Inizio</Table.Field>
                <Table.Field className={fieldsWidth[6]}>Fine</Table.Field>
            </Table.Row>

            {machines.map((machine)=>{
                return(
                    <Table.Row key={machine.id} className={"border-b border-slate-100 text-sm"+" "+rowClasses}>
                        <Table.Field className={fieldsWidth[0]}>{machine.number}</Table.Field>
                        <Table.Field className={fieldsWidth[1]}>{machine.code}</Table.Field>
                        <Table.Field className={fieldsWidth[2]}>{machine.name}</Table.Field>
                        <Table.Field className={fieldsWidth[3]}>{machine.model}</Table.Field>
                        <Table.Field className={fieldsWidth[4]}>{machine.place.address_first_line} <br /> {machine.place.address_second_line}</Table.Field>
                        <Table.Field className={fieldsWidth[5]}>{machine.start}</Table.Field>
                        <Table.Field className={fieldsWidth[6]}>{machine.end}</Table.Field>
                    </Table.Row>
                )
            })}
        </Table>
    )
}
