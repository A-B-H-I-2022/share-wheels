
list = [1,5]
l = len(list)

def peak(list,l):
    n = []
    flag = 0
    if l >= 3:
        for i in range(1,l-1):
                if list[i] > list[i-1] and list[i]> list[i+1]:
                        n.append(list[i])
                        flag = 1
    if flag:
         print(min(n)) 
    else : 
        print("Peak does not exist")               
    
peak(list,l)