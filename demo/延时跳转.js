function timer(i,$scope,$timeout){
		if(i>0){
			/*
				业务代码
			 */
			var str = "在"+i+"秒后跳转";
			$timeout(function () {
				timer($scope,i-1,$timeout);
 			 },1000);
		}else{
			location.href="http://www.baidu.com";
			return ;
		}
	}