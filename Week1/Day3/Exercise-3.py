class Song:
  def __init__(self, lyrics):
    self.lyrics = lyrics

  def sing_me_a_song(self):
    for i in self.lyrics:
      print(i)


stairway = Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
Song.sing_me_a_song(stairway)