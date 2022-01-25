const ap = new APlayer({
    container: document.getElementById('aplayer'),
	fixed: true,     <!--是否开启吸底模式-->
    autoplay: false,	     <!--是否自动播放-->
	volume: 0.3,     <!--播放器默认音量-->
	
	
	
	
    audio: [
      {
        name: "雨に濡れた空気",
        artist: '春野杉卉',
        url: 'http://lc-OrKaecaS.cn-e1.lcfile.com/t6j2Y5i9T5LoE9zLwbUsB0XuG1uOLBts/%E9%9B%A8%E3%81%AB%E6%BF%A1%E3%82%8C%E3%81%9F%E7%A9%BA%E6%B0%97%EF%BC%88%E6%98%A5%E9%87%8E%E6%9D%89%E5%8D%89%EF%BC%89.mp3',
        cover: 'http://lc-OrKaecaS.cn-e1.lcfile.com/p0wxJSVnhsNeAhTGC9rVL0sNNHrn9JeT/%E9%9B%A8%E3%81%AB%E6%BF%A1%E3%82%8C%E3%81%9F%E7%A9%BA%E6%B0%97.jpg',
      },
      {
        name: '静かな夏',
        artist: '春野杉卉',
        url: 'http://lc-OrKaecaS.cn-e1.lcfile.com/ATWzxK3FUxuUbpHxrKOkv4e5UnCQogt1/%E9%9D%99%E3%81%8B%E3%81%AA%E5%A4%8F%EF%BC%88%E6%98%A5%E9%87%8E%E6%9D%89%E5%8D%89%EF%BC%89.mp3',
        cover: 'http://lc-OrKaecaS.cn-e1.lcfile.com/p0wxJSVnhsNeAhTGC9rVL0sNNHrn9JeT/%E9%9B%A8%E3%81%AB%E6%BF%A1%E3%82%8C%E3%81%9F%E7%A9%BA%E6%B0%97.jpg',
      },
      {
        name: 'Kiss The Rain',
        artist: 'Yiruma',
        url: 'http://lc-OrKaecaS.cn-e1.lcfile.com/RVV6Q9gIeJ0Su0KqYKivR4Ic8yw1lJ74/Kiss%20The%20Rain%EF%BC%88Yiruma%EF%BC%89.mp3',
        cover: 'http://lc-OrKaecaS.cn-e1.lcfile.com/Mv9nh8Gb3hsnI8tNcqMmNNk8pqYNbmbw/Kiss%20The%20Rain.jpg',
      },
	  {
        name: '所念皆星河',
        artist: 'CMJ',
        url: 'http://lc-OrKaecaS.cn-e1.lcfile.com/KcdAq10lLwnbYnxwUxYLGG81e5owRFlX/%E6%89%80%E5%BF%B5%E7%9A%86%E6%98%9F%E6%B2%B3%EF%BC%88CMJ%EF%BC%89.mp3',
        cover: 'http://lc-OrKaecaS.cn-e1.lcfile.com/TjjoV2ezvI39w4vqquu3HbTDN9AScHir/%E6%89%80%E5%BF%B5%E7%9A%86%E6%98%9F%E6%B2%B3.jpg',
      },
	  {
        name: 'Starry Sky(满天星河)',
        artist: 'dylanf',
        url: 'http://lc-OrKaecaS.cn-e1.lcfile.com/HgS6l2f90c1pyfqR44U2uwul6GmOmRi9/Starry%20Sky%28%E6%BB%A1%E5%A4%A9%E6%98%9F%E6%B2%B3%29%EF%BC%88dylanf%EF%BC%89.mp3',
        cover: 'http://lc-OrKaecaS.cn-e1.lcfile.com/IaWOUJ5rrWA62lch5zSx5xF6L1of2j0k/Starry%20Sky%28%E6%BB%A1%E5%A4%A9%E6%98%9F%E6%B2%B3%29.jpg',
      },	  
	  {
        name: 'The truth that you leave',
        artist: 'Pianoboy高至豪',
        url: 'http://lc-OrKaecaS.cn-e1.lcfile.com/3pUTLOu2OA4h6gucRcdpf2v175um7DWY/The%20truth%20that%20you%20leave%EF%BC%88Pianoboy%E9%AB%98%E8%87%B3%E8%B1%AA%EF%BC%89.mp3',
        cover: 'http://lc-OrKaecaS.cn-e1.lcfile.com/WdtFcYEvsd08HdwSXvtBnVggulV3AYap/The%20truth%20that%20you%20leave.jpg',
      },
	  {
        name: '孤勇者',
        artist: '陈奕迅',
        url: 'http://lc-OrKaecaS.cn-e1.lcfile.com/Ey4R0cCmjjDDs6UusEMKzTkNyANjQPWq/%E5%AD%A4%E5%8B%87%E8%80%85%EF%BC%88%E9%99%88%E5%A5%95%E8%BF%85%EF%BC%89.mp3',
        cover: 'http://lc-OrKaecaS.cn-e1.lcfile.com/SYTO2fpucEpqa3sSAm6HWS45aOjhAnYx/%E5%AD%A4%E5%8B%87%E8%80%85.jpg',
      },
	  {
        name: '阴天快乐',
        artist: '陈奕迅',
        url: 'http://lc-OrKaecaS.cn-e1.lcfile.com/ysPzI6aid74L5Qk5PQ2frle1WQLV0Qmn/%E9%98%B4%E5%A4%A9%E5%BF%AB%E4%B9%90%EF%BC%88%E9%99%88%E5%A5%95%E8%BF%85%EF%BC%89.mp3',
        cover: 'http://lc-OrKaecaS.cn-e1.lcfile.com/PoH0u74dC6tsQMSUEcD2nRw7lyzvvhVx/%E9%98%B4%E5%A4%A9%E5%BF%AB%E4%B9%90.jpg',
      },
    ]
});