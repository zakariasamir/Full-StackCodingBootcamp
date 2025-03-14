class Pagination:
    def __init__(self, items=None, pageSize=10):
        self.items = items if items is not None else []
        self.pageSize = int(pageSize)
        self.totalPages = max(1, (len(self.items) + self.pageSize - 1) // self.pageSize)
        self.currentPage = 1
    
    def getVisibleItems(self):
        start = (self.currentPage - 1) * self.pageSize
        end = start + self.pageSize
        return self.items[start:end]
    
    def nextPage(self):
        self.currentPage = min(self.currentPage + 1, self.totalPages)
        return self
    
    def prevPage(self):
        self.currentPage = max(1, self.currentPage - 1)
        return self
    
    def firstPage(self):
        self.currentPage = 1
        return self
    
    def lastPage(self):
        self.currentPage = self.totalPages
        return self
    
    def goToPage(self, pageNum):
        pageNum = int(pageNum)
        self.currentPage = max(1, min(pageNum, self.totalPages))
        return self


if __name__ == "__main__":
    
    alphabetList = list("abcdefghijklmnopqrstuvwxyz")
    p = Pagination(alphabetList, 4)


    print("Initial page:", p.getVisibleItems())


    p.nextPage()
    print("After nextPage:", p.getVisibleItems())


    p.lastPage()
    print("Last page:", p.getVisibleItems())


    p.firstPage().nextPage().nextPage()
    print("After chaining:", p.getVisibleItems())


    p.goToPage(10) 
    print("After goToPage(10):", p.getVisibleItems())


    p2 = Pagination(alphabetList, 4.5)
    print("With float pageSize:", p2.getVisibleItems())