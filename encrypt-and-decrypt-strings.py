class Encrypter(object):

    def __init__(self, keys, values, dictionary):
        self.enc = {k: v for k,v in zip(keys, values)}
        self.decrypt = collections.Counter(self.encrypt(w) for w in dictionary).__getitem__
        
    def encrypt(self, word1):
        return ''.join(self.enc[c] for c in word1)