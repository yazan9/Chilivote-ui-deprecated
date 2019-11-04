import { Component, OnInit } from '@angular/core';
import { ChilivoteVotableDTO } from 'src/app/models/ChilivoteVotableDTO';
import { ChilivoteService } from 'src/app/services/chilivote.service';
import { VoteService } from 'src/app/services/vote.service';
import { AnswerVoteDTO } from 'src/app/models/AnswerVoteDTO';

@Component({
  selector: 'app-chilivote-container',
  templateUrl: './chilivote-container.component.html',
  styleUrls: ['./chilivote-container.component.css']
})
export class ChilivoteContainerComponent implements OnInit {

  chilivotes: ChilivoteVotableDTO[] = [];
  constructor(private chilivoteService: ChilivoteService, private voteService:VoteService) { }
  
  ngOnInit() {
    this.chilivoteService.getFeed().subscribe((result) => {
      this.chilivotes = result;
    });
  }

  vote(answer: AnswerVoteDTO, theOtherAnswer: AnswerVoteDTO)
  {
    this.voteService.vote(answer.id).subscribe(()=> {
      answer.voted = true;
      theOtherAnswer.voted = false;
    });
  }
}
