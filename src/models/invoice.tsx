
import * as moment from 'moment';

export const invoice = {
    // options
    currency: 'USD',
    fields: {
        discounts: true,
        shipping: true,
        tax: '%'
    },

    // template    
    header: 'INVOICE',
    to_title: 'Bill To',
    // invoice_number_title: '#',
    // tslint:disable-next-line:object-literal-sort-keys
    dateTitle: 'Date',
    payment_terms_title: 'Payments Terms',
    due_date_title: 'Due Date',
    // purchase_order_title: '',
    quantity_header: 'Quantity',
    item_header: 'Item',
    unit_cost_header: 'Rate',
    amount_header: 'Amount',
    subtotal_title: 'Subtotal',
    discounts_title: 'Discounts',
    tax_title: 'Tax',
    shipping_title: 'Shipping',
    total_title: 'Total',
    amount_paid_title: 'Amount Paid',
    balance_title: 'Balance Due',
    terms_title: 'Terms',
    notes_title: 'Notes',

    // invoice    
    logo: '',
    from: '',
    to: '',
    number: '',
    purchase_order: '',
    date: moment().format("LL"),
    payment_terms: '',
    due_date: moment().format("LL"),
    items: [
        {
            description: '',
            name: '',
            quantity: 0,
            unit_cost: 0
        }
    ],
    discounts: 0,
    tax: 0,
    shipping: 0,
    amount_paid: 0,
    notes: '',
    terms: '',
}
