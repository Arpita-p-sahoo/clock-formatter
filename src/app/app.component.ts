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
  yyyy_MM_dd_T_HH_mm_ss_SSSZZZZ(){ 
    let dtstr = this.datepipe.transform(this.date, 'yyyy-MM-ddTHH:mm:ss*SSSZZZZ');
    this.formattext = dtstr;
   }
  yyyy_MMM_dd_HH_mm_ss_SSS_zzz(){
    let dtstr = this.datepipe.transform(this.date, 'yyyy MMM dd HH:mm:ss.SSS zzz');
    this.formattext = dtstr;
    }
  MMM_dd_HH_mm_ss_ZZZZ_yyyy(){
    let dtstr = this.datepipe.transform(this.date, 'MMM dd HH:mm:ss ZZZZ yyyy');
    this.formattext = dtstr;
  }

  dd_MMM_yyyy_HHmm_ss_ZZZZ(){
    let dtstr = this.datepipe.transform(this.date, 'dd/MMM/yyyy:HH:mm:ss ZZZZ');
    this.formattext = dtstr;
  }
  MMM_dd_yyyy_hh_mm_ss_a(){
    let dtstr = this.datepipe.transform(this.date, 'MMM dd, yyyy hh:mm:ss a');
    this.formattext = dtstr;
  }
  MMM_dd_yyyy_HH_mm_ss(){
    let dtstr = this.datepipe.transform(this.date, 'MMM dd yyyy HH:mm:ss');
    this.formattext = dtstr;
  }
  MMM_dd_HH_mm_ss_yyyy(){
    let dtstr = this.datepipe.transform(this.date, 'MMM dd HH:mm:ss yyyy');
    this.formattext = dtstr;
  }
  MMM_dd_HH_mm_ss_ZZZZ(){
    let dtstr = this.datepipe.transform(this.date, 'MMM dd HH:mm:ss ZZZZ');
    this.formattext = dtstr;
  }
  MMM_dd_HH_mm_ss(){
    let dtstr = this.datepipe.transform(this.date, 'MMM dd HH:mm:ss');
    this.formattext = dtstr;
  }
  yyyy_MM_dd_T_HH_mm_ssZZZZ(){
    let dtstr = this.datepipe.transform(this.date, 'yyyy-MM-ddTHH:mm:ssZZZZ');
    this.formattext = dtstr;
  }
  yyyy_MM_dd_T_HH_mm_ss_SSS_Z(){
    let dtstr = this.datepipe.transform(this.date, 'yyyy-MM-ddTHH:mm:ss.SSSZ');
    this.formattext = dtstr;
  }
  yyyy_MM_dd_HH_mm_ss_ZZZZ(){
    let dtstr = this.datepipe.transform(this.date, 'yyyy-MM-dd HH:mm:ss ZZZZ');
    this.formattext = dtstr;
  }
  yyyy_MM_dd_HH_mm_ssZZZZ(){
    let dtstr = this.datepipe.transform(this.date, 'yyyy-MM-dd HH:mm:ssZZZZ');
    this.formattext = dtstr;
  }
  yyyy_MM_dd_HH_mm_ss_SSS(){
    let dtstr = this.datepipe.transform(this.date, 'yyyy-MM-dd HH:mm:ss,SSS');
    this.formattext = dtstr;
  }
  yyyy_MM_dd_HH_mm_ss(){
    let dtstr = this.datepipe.transform(this.date, 'yyyy/MM/dd*HH:mm:ss');
    this.formattext = dtstr;
  }
  yyyy_MM_dd_HH_mm_ss_SSSZZZZ(){
    let dtstr = this.datepipe.transform(this.date, 'yyyy-MM-dd HH:mm:ss,SSSZZZZ');
    this.formattext = dtstr;
  }
  yyyy_MM_dd_T_HH_mm_ss_SSS(){
    let dtstr = this.datepipe.transform(this.date, 'yyyy-MM-ddTHH:mm:ss.SSS');
    this.formattext = dtstr;
  }
  yyyy_MM_dd_T_HH_mm_ss_Z(){
    let dtstr = this.datepipe.transform(this.date, 'yyyy-MM-ddTHH:mm:ssZ');
    this.formattext = dtstr;
  }
  yyyy_MM_dd_T_HH_mm_ss(){
    let dtstr = this.datepipe.transform(this.date, 'yyyy-MM-ddTHH:mm:ss');
    this.formattext = dtstr;
  }
  yy_MM_dd_HH_mm_ss_SSS_ZZZ(){
    let dtstr = this.datepipe.transform(this.date, 'yyyy-MM-ddTHH:mm:ss');
    this.formattext = dtstr;
  }
  yy_MM_dd_HH_mm_ss(){
    let dtstr = this.datepipe.transform(this.date, 'yy-MM-dd HH:mm:ss');
    this.formattext = dtstr;
  }
  yyMMdd_HH_mm_ss(){
    let dtstr = this.datepipe.transform(this.date, 'yyMMdd HH:mm:ss');
    this.formattext = dtstr;
  }
  MM_dd_yy_HH_mm_ss(){
    let dtstr = this.datepipe.transform(this.date, 'yyMMdd HH:mm:ss');
    this.formattext = dtstr;
  }


}
