import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clock-formatter';

  datepipe: DatePipe = new DatePipe('en-US');
  date = new Date();
  formattext:any = "Click the buttons to see the result";
  constructor(){}

  FormatterButtons = [
    {buttonText:'yyyy-MM-ddTHH:mm:ss*SSSZZZZ',classname:'alert alert-info',format:'yyyy-MM-ddTHH:mm:ss*SSSZZZZ'},
    {buttonText:'MMM dd HH:mm:ss ZZZZ yyyy',classname:'alert alert-info',format:'MMM dd HH:mm:ss ZZZZ yyyy'},
    {buttonText:'dd/MMM/yyyy:HH:mm:ss ZZZZ',classname:'alert alert-info',format:'dd/MMM/yyyy:HH:mm:ss ZZZZ'},
    {buttonText:'MMM dd, yyyy hh:mm:ss a',classname:'alert alert-info',format:'MMM dd, yyyy hh:mm:ss a'},
    {buttonText:'MMM dd yyyy HH:mm:ss',classname:'alert alert-info',format:'MMM dd yyyy HH:mm:ss'},
    {buttonText:'MMM dd HH:mm:ss yyyy',classname:'alert alert-info',format:'MMM dd HH:mm:ss yyyy'},
    {buttonText:'MMM dd HH:mm:ss ZZZZ',classname:'alert alert-info',format:'MMM dd HH:mm:ss ZZZZ'},
    {buttonText:'MMM dd HH:mm:ss',classname:'alert alert-info',format:'MMM dd HH:mm:ss'},
    {buttonText:'yyyy-MM-ddTHH:mm:ssZZZZ',classname:'alert alert-info',format:'yyyy-MM-ddTHH:mm:ssZZZZ'},
    {buttonText:'yyyy-MM-ddTHH:mm:ss.SSSZ',classname:'alert alert-info',format:'yyyy-MM-ddTHH:mm:ss.SSSZ'},
    {buttonText:'yyyy-MM-dd HH:mm:ss ZZZZ',classname:'alert alert-info',format:'yyyy-MM-dd HH:mm:ss ZZZZ'},
    {buttonText:'yyyy-MM-dd HH:mm:ssZZZZ',classname:'alert alert-info',format:'yyyy-MM-dd HH:mm:ssZZZZ'},
    {buttonText:'yyyy-MM-dd HH:mm:ss,SSS',classname:'alert alert-info',format:'yyyy-MM-dd HH:mm:ss,SSS'},
    {buttonText:'yyyy-MM-dd HH:mm:ss,SSS',classname:'alert alert-info',format:'yyyy-MM-dd HH:mm:ss,SSS'},
    {buttonText:'yyyy/MM/dd*HH:mm:ss',classname:'alert alert-info',format:'yyyy/MM/dd*HH:mm:ss'},
    {buttonText:'yyyy-MM-dd HH:mm:ss,SSSZZZZ',classname:'alert alert-info',format:'yyyy-MM-dd HH:mm:ss,SSSZZZZ'},
    {buttonText:'yyyy-MM-ddTHH:mm:ss.SSS',classname:'alert alert-info',format:'yyyy-MM-ddTHH:mm:ss.SSS'},
    {buttonText:'yyyy-MM-ddTHH:mm:ssZ',classname:'alert alert-info',format:'yyyy-MM-ddTHH:mm:ssZ'},
    {buttonText:'yyyy-MM-ddTHH:mm:ss',classname:'alert alert-info',format:'yyyy-MM-ddTHH:mm:ss'},
    {buttonText:'yyMMdd HH:mm:ss',classname:'alert alert-info',format:'yyMMdd HH:mm:ss'},
  ]

  formatDateAndTime=(format:string)=>{
    let dtstr = this.datepipe.transform(this.date, format);
    this.formattext = dtstr;
  }



}
