import * as React from 'react';
// import {currencySymbols} from '../../models/currency';
// import {invoice} from '../../models/invoice';
// import {user} from '../../models/user';

interface IProps {
  countBy?: number;
}

interface IState {
  count: number;
}

// class Invoice extends React.Component<any, any> {
//   constructor(props: any) {
//     super(props);
//     this.onDrop = this.onDrop.bind(this);
//     this.toggleSendModal = this.toggleSendModal.bind(this);
//     this.toggleInvoicesModal = this.toggleInvoicesModal.bind(this);
//     this.state = {
//       currency_sign: '$',
//       invoice,
//       invoicesModal: false,
//       sendModal: false,
//       user
//     };
//   }

//   updateInvoice(props, value){
//     this.state.invoice[props] = value;
//     this.setState({ invoice: this.state.invoice });
//   }
//   updateUser(props, value){
//       this.state.user[props] = value;
//       this.setState({ user: this.state.user });
//   }
//   updateItem(index, props, value){
//       this.state.invoice.items[index][props] = value;
//       this.setState({ invoice: this.state.invoice });
//   }
//   updateCurrency(value){
//       this.updateInvoice('currency', value);
//       this.setState({ currency_sign: currency_sign_object[value] });
//   }
//   addItem(){
//       this.state.invoice.items.push({
//           name: '',
//           quantity: 0,
//           unit_cost: 0,
//           description: ''
//       });
//       this.setState({ invoice: this.state.invoice });
//   }
//   removeItem(index){
//       this.state.invoice.items.splice(index, 1);
//       this.setState({ invoice: this.state.invoice });
//   }
//   onDrop(files) {
//       let file = files[0];
//       if(file.size > 768000 ){
//           Swal({
//               type: 'error',
//               title: 'Oops...',
//               text: 'Max file size is 750KB !',
//           })
//           return false;
//       }
//       let reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => {
//           this.state.invoice.logo=reader.result;
//           this.setState({ invoice: this.state.invoice });
//       }
//   }
//   removeLogo(){
//       this.state.invoice.logo='';
//       this.setState({ invoice: this.state.invoice });
//   }
//   saveToLocal(){
//       let localInvoices = JSON.parse(localStorage.getItem("invoices"));
//       if(!localInvoices) localInvoices=[];
//       const item={
//           invoice: this.state.invoice,
//           time: moment().format('LLL')
//       }
//       localInvoices.push(item);
//       localStorage.setItem('invoices', JSON.stringify(localInvoices));
//   }
//   generate(){
//       this.saveToLocal();
//       InvoiceService.generate(this.state.invoice).then(resp=>{
//           this.download(resp.data);
//       })
//   }
//   download(base64String) {
//       var element = document.createElement('a');
//       element.setAttribute('href', base64String);
//       element.setAttribute('download', 'invoice.pdf');
    
//       element.style.display = 'none';
//       document.body.appendChild(element);
    
//       element.click();
    
//       document.body.removeChild(element);
//   }
//   sendInvoice(){
//       this.saveToLocal();
//       this.toggleSendModal();
//       InvoiceService.send(this.state.invoice, this.state.user).then(resp=>{
//           Swal({
//               type: 'success',
//               title: 'Success',
//               text: 'Email sent!'
//           })
//       }).catch(resp=>{
//           Swal({
//               type: 'error',
//               title: 'Oops...',
//               text: 'Sending email is failed!',
//           })
//       })
//   }
//   toggleSendModal() {
//       this.setState({ sendModal: !this.state.sendModal });
//   }
//   toggleInvoicesModal(){
//       this.setState({ invoicesModal: !this.state.invoicesModal })
//   }
//   selectInvoice(invoice){
//       this.toggleInvoicesModal();
//       this.setState({ invoice: invoice });
//   }
//   clearLocalInvoices(){        
//       this.toggleInvoicesModal();
//       localStorage.removeItem('invoices');
//   }
// }
  
class Invoice extends React.Component<IProps, IState> {
  public static efaultProps: Partial<IProps> = {
    countBy: 1,
  };

  public state: IState = {
    count: 0,
  };

  public increase = () => {
    const countBy: number = this.props.countBy!;
    const count = this.state.count + countBy;
    this.setState({ count });
  }

  public render() {
    return (
      <div>
        <h1>
          My Invoice number is {this.state.count}
        </h1>
        <button className="btn btn-primary" onClick={this.increase}>
          Increase
        </button>
      </div>
    );
  }
}

export default Invoice;