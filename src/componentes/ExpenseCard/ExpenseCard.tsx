import { useState } from "react";
import "./ExpenseCard.css";

interface ExpenseCardProps {
    name: string;
    amount: number;
    category: string;
    date: string;
}

export function ExpenseCard({ name, amount, category, date }: ExpenseCardProps) {
    return(
        <>
        <article className="expense-card">
            <div className="expense-info1">
            <p className="expense-category">{category}</p>
            <p className="expense-name">{name}</p>
            <p className="expense-date">{date}</p>            
            </div>

            <div className="expense-info2">
                <h1 className="expense-amount">${amount}</h1>
            </div>   

        </article>
        <hr className="line2" />        
        </>
    )
}