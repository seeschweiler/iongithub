import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GithubService } from '../../providers/github-service';
import { RepoDetailsPage } from '../repo-details/repo-details';

/*
  Generated class for the Profiles page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profiles',
  templateUrl: 'profiles.html'
})
export class ProfilesPage {

  profiles: any;
  repos: any;
  github_user = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubService: GithubService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilesPage');
  }

  onSubmit() {
    this.getProfile(this.github_user);
    this.github_user = '';
  }

  reset() {
    this.profiles = '';
    this.github_user = '';
  }

  showRepos(github_user) {
    this.getRepos(github_user);
  }

  repoTapped(event, repo) {
    this.navCtrl.push(RepoDetailsPage, {
      repo: repo
    });
  }

  getProfile(username) {
    this.githubService.getProfile(username).subscribe(response => {
      this.profiles = response;
      console.log(this.profiles);
    })
  }

  getRepos(username) {
    this.githubService.getRepos(username).subscribe(response => {
      this.repos = response;
      console.log(this.repos);
    })
  }

}
