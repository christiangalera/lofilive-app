import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-live-form-dialog',
  templateUrl: './live-form-dialog.component.html',
  styleUrls: ['./live-form-dialog.component.css']
})
export class LiveFormDialogComponent implements OnInit {
  public liveForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<LiveFormDialogComponent>
  ) { }

  ngOnInit(): void {
    this.liveForm = this.fb.group({
      lofiName: ['', [Validators.required]],
      channelName: ['', [Validators.required]],
      lofiLink: ['', [Validators.required]],
      videoStatus: ['', [Validators.required]],
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
